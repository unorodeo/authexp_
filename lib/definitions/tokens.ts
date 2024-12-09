import prisma from "@/lib/db";
import { totp } from "otplib";
import { v4 as uuidv4 } from "uuid";

export const generateVerificationToken = async (email: string) => {
  try {
    const t = uuidv4();
    const expires = new Date(new Date().getTime() + 1800 * 1000); // 30 mins
    const existing = await getVerificationByEmail(email);

    if (existing) {
      await prisma.verificationToken.delete({
        where: {
          id: existing.id,
        },
      });
    }

    const token = await prisma.verificationToken.create({
      data: {
        email: email,
        token: t,
        expires: expires,
      },
    });

    return token;
  } catch {
    return null;
  }
};

export const generateVerificationOTP = async (email: string) => {
  try {
    totp.options = {
      step: 1800,
    };
    const o = totp.generate(process.env.AUTH_SECRET as string);
    const expires = new Date(new Date().getTime() + 1800 * 1000); // 30 mins
    const existing = await getVerificationByEmail(email);

    if (existing) {
      await prisma.verificationToken.delete({
        where: {
          id: existing.id,
        },
      });
    }

    const otp = await prisma.verificationToken.create({
      data: {
        email: email,
        token: o,
        expires: expires,
      },
    });
    return otp
  } catch {
    return null;
  }
};

export const getVerificationByEmail = async (email: string) => {
  try {
    return await prisma.verificationToken.findFirst({
      where: {
        email: email,
      },
    });
  } catch {
    return null;
  }
};

export const getVerificationByToken = async (token: string) => {
  try {
    return await prisma.verificationToken.findUnique({
      where: {
        token: token,
      },
    });
  } catch {
    return null;
  }
};
