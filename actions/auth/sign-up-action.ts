"use server";

import { signUpSchema } from "@/lib/schemas/auth";
import { z } from "zod";

export const signUpAction = async (values: z.infer<typeof signUpSchema>) => {
  const data = await signUpSchema.safeParseAsync(values);
  console.log(data);
};
