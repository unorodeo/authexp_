"use server";

import { getAccountByEmail } from "@/lib/definitions/account";
import { getVerificationByToken } from "@/lib/definitions/tokens";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { verificationTokenSchema } from "@/lib/schemas/auth";
import { z } from "zod";

type Result =
  | {
      status: "success" | "error";
      message: string;
    }
  | undefined;

export const verifyTokenAction = async (
  token: z.infer<typeof verificationTokenSchema>
): Promise<Result> => {
  try {
    const exists = await getVerificationByToken(token.token);

    if (!exists) {
      return {
        status: "error",
        message: "Invalid one-time password code",
      };
    }

    const expired = new Date(exists.expires) < new Date();

    if (expired) {
      return {
        status: "error",
        message: "OTP code has expired, generate a new one",
      };
    }

    const user = await getAccountByEmail(exists.email);

    if (!user) {
      return {
        status: "error",
        message: "Account does not exists",
      };
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: exists.email,
        emailVerified: new Date(),
      },
    });

    await prisma.verificationToken
      .delete({
        where: {
          id: exists.id,
        },
      })
      .then(() => {
        return {
          status: "success",
          message: `Account verified successfully`,
        };
      });

      redirect("/sign-in")
  } catch {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
};
