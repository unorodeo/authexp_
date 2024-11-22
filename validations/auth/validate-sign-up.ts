import {
	emailSchema,
	nameSchema,
	passwordSchema,
} from "@/validations/auth/shared";

import { z } from "zod";

export const signUpSchema = z
	.object({
		name: nameSchema,
		email: emailSchema,
		password: passwordSchema,
		confirm: passwordSchema,
	})
	.refine((data) => data.password === data.confirm, {
		path: ["confirm"],
		message: "Passwords do not match",
	});

export type SignUpSchema = z.infer<typeof signUpSchema>;
