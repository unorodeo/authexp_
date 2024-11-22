import { passwordSchema } from "@/validations/auth/shared";
import { z } from "zod";

export const newPasswordSchema = z
	.object({
		password: passwordSchema,
		confirm: passwordSchema,
	})
	.refine((data) => data.password === data.confirm, {
		path: ["confirm"],
		message: "Passwords do not match",
	});

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;
