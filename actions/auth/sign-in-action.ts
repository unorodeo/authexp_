"use server";

import {
  generateVerificationOTP,
  getVerificationByEmail,
} from "@/lib/definitions/tokens";

import { AuthError } from "next-auth";
import { REDIRECT_SIGNIN } from "@/lib/auth.routes";
import { getAccountByEmail } from "@/lib/definitions/account";
import { sendVerificationEmail } from "@/lib/emails";
import { signIn } from "@/lib/auth";
import { signInSchema } from "@/lib/schemas/auth";
import { z } from "zod";

type Result =
  | {
      status: "success" | "error";
      message: string;
    }
  | undefined;

export const signInAction = async (
  values: z.infer<typeof signInSchema>
): Promise<Result> => {
  const data = await signInSchema.safeParseAsync(values);

  if (!data.success) {
    return {
      status: "error",
      message: "Failed to sign in",
    };
  }

  const existing = await getAccountByEmail(data.data.email, true);

  if (existing?.password && !existing.emailVerified) {
    const verification = await getVerificationByEmail(existing.email);

    if (!verification) {
      return {
        status: "error",
        message: "Account does not have a verification",
      };
    }

    const expired = new Date(verification.expires) < new Date();

    if (expired) {
      const token = await generateVerificationOTP(verification.email);
      await sendVerificationEmail(
        token?.email as string,
        token?.token as string
      );

      return {
        status: "success",
        message: `Verification has been sent to ${verification.email}`,
      };
    }

    return {
      status: "success",
      message: "Verification has not expired, verify your account",
    };
  }

  try {
    await signIn("credentials", {
      redirectTo: REDIRECT_SIGNIN,
      email: data.data.email,
      password: data.data.password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            status: "error",
            message: "Invalid account credentials",
          };
        case "AccountNotLinked":
          return {
            status: "error",
            message: "Account linkage not possible",
          };
        case "AccessDenied":
          return {
            status: "error",
            message: "Account has not been verified",
          };
        default:
          return {
            status: "error",
            message: "Something went wrong",
          };
      }
    }
    throw error;
  }

  return {
    status: "success",
    message: "Sign in successful, redirecting...",
  };
};
