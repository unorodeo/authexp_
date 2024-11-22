import { z } from "zod";

export const nameSchema = z
	.string()
	.min(3, { message: "Name must be min. 3 characters" })
	.max(60, { message: "Name must be max. 60 characters" });

export const emailSchema = z
	.string()
	.min(4, { message: "Email must be min. 4 characters" })
	.max(255, { message: "Email must be max. 255 characters" })
	.email();

export const passwordSchema = z
	.string()
	.min(8, { message: "Password must be min. 8 characters" })
	.max(25, { message: "Password must be max. 25 characters" })
	.regex(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}$/,
		{
			message:
				"Password must have at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
		}
	);
