"use server";

import { signInSchema } from "@/lib/schemas/auth";
import { z } from "zod";

export const signInAction = async (values: z.infer<typeof signInSchema>) => {
  const data = await signInSchema.safeParseAsync(values);
  console.log(data);
};
