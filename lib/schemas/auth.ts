import { object, z } from "zod";

const email = z
  .string()
  .min(1, "Email is required")
  .max(150, "Email must be max. 150 characters")
  .email();
const password = z
  .string()
  .min(8, "Password must be min. 8 characters")
  .max(25, "Password must be max. 25 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
    "Invalid password"
  );

export const signInSchema = object({
  email: email,
  password: password,
});

export const signUpSchema = object({
  name: z
    .string()
    .min(4, "Name must be min. 4 characters")
    .max(150, "Name must be max. 150 characters"),
  email: email,
  password: password,
  confirm: password,
}).refine((data) => data.password === data.confirm, {
  path: ["confirm"],
  message: "Passwords do not match",
});

export const forgotPasswordSchema = signInSchema.pick({
  email: true,
});

export const updatePasswordSchema = object({
  password: password,
  confirm: password,
}).refine((data) => data.password === data.confirm, {
  path: ["confirm"],
  message: "Passwords do not match",
});
