"use server";

import { genSaltSync, hashSync } from "bcryptjs";

import { REDIRECT_SIGNUP } from "@/lib/auth.routes";
import { getAccountByEmail } from "@/lib/definitions/prisma";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
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

  // TODO: send verification token

  redirect(REDIRECT_SIGNUP(email))

  return {
    status: "success",
    message: "Account created successfully",
  };
};
