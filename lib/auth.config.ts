import type { NextAuthConfig } from "next-auth";

const authConfig = {
  providers: [],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;

export default authConfig;
