"use server";

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

  console.log(data);
  return {
    status: "success",
    message: "Sign in successful, redirecting...",
  };
};
