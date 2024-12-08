import NextAuth, { DefaultSession } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/lib/auth.config";
import { getAccountById } from "./definitions/prisma";
import prisma from "@/lib/db";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    signIn: async ({ user }) => {
      const exists = await getAccountById(user.id as string);

      // the user signed in with a credentials provider
      if(!exists || !exists.emailVerified) return false;
      
      return true;
    },
    session: async ({ token, session }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    jwt: async ({ token }) => {
      if (!token.sub) return token;

      const exists = await getAccountById(token.sub);

      if (!exists) return token;

      token.role = exists.role;

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
  ...authConfig,
});
