import { emailSchema, passwordSchema } from "@/validations/auth/shared";

import { z } from "zod";

export const signInSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

export const forgotPasswordSchema = signInSchema.pick({ email: true });

export type SignInSchema = z.infer<typeof signInSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
