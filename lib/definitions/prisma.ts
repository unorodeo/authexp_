import prisma from "@/lib/db";

export const getAccountByEmail = async (email: string) => {
  try {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch {
    return null;
  }
};

export const getAccountById = async (id: string) => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch {
    return null;
  }
};
