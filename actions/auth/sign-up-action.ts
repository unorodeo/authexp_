"use server";

import { signUpSchema } from "@/lib/schemas/auth";
import { z } from "zod";

type Result =
  | {
      status: "success" | "error";
      message: string;
    }
  | undefined;

export const signUpAction = async (
  values: z.infer<typeof signUpSchema>
): Promise<Result> => {
  const data = await signUpSchema.safeParseAsync(values);
  
  if (!data.success) {
    return {
      status: "error",
      message: "Failed to create account",
    };
  }

  console.log(data);
  return {
    status: "success",
    message: "Account created successfully",
  };
};
