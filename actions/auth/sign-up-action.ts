"use server";

import { genSaltSync, hashSync } from "bcryptjs";
import { permanentRedirect, redirect } from "next/navigation";

import { generateVerificationOTP } from "@/lib/definitions/tokens";
import { getAccountByEmail } from "@/lib/definitions/account";
import prisma from "@/lib/db";
import { sendVerificationEmail } from "@/lib/emails";
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

  const { name, email, password } = data.data;

  // salt and hash password
  const rounds = Number(process.env.AUTH_ROUNDS);
  const salt = genSaltSync(rounds);
  const hash = hashSync(password, salt);

  const exisiting = await getAccountByEmail(email);

  if (exisiting) {
    return {
      status: "error",
      message: "Email is already taken",
    };
  }

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hash,
    },
  });

  const token = await generateVerificationOTP(email);

  if (token?.email && token.token) {
    await sendVerificationEmail(token.email, token.token);
    permanentRedirect("/verify");
  } else {
    return {
      status: "error",
      message: "Failed to create token",
    };
  }

  return {
    status: "success",
    message: "Account created successfully",
  };
};
