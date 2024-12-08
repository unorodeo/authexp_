"use server";

import { AuthError } from "next-auth";
import { REDIRECT_SIGNIN } from "@/lib/auth.routes";
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
