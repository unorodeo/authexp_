import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/schemas/auth";
import { getAccountByEmail } from "./definitions/prisma";
import { compareSync } from "bcryptjs";

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const data = await signInSchema.safeParseAsync(credentials);

        if (data.error) {
          throw new Error("Invalid credentials");
        }

        const { email, password } = data.data;

        const user = await getAccountByEmail(email, true);

        if (!user || !user.password) return null;

        const match = compareSync(password, user.password);

        if (match) return user;

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

export default authConfig;
