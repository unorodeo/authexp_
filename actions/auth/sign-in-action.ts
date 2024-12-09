"use server";

import { generateVerificationOTP, getVerificationByEmail } from "@/lib/definitions/tokens";

import { AuthError } from "next-auth";
import { REDIRECT_SIGNIN } from "@/lib/auth.routes";
import { getAccountByEmail } from "@/lib/definitions/account";
import prisma from "@/lib/db";
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

  const existing = await getAccountByEmail(data.data.email, true)

  if(existing?.password && !existing.emailVerified) {
    const expired = await getVerificationByEmail(existing.email)
    if (new Date().getSeconds() < (expired?.expires.getSeconds() as number)) {
      await generateVerificationOTP(existing.email)

      return {
        status: "success",
        message: `Verification has been sent to ${existing.email}`
      }
    }

    return {
      status: "success",
      message: "Verification has not expired, verify your account"
    }
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
