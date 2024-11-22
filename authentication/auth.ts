import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { db } from "@/database/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: DrizzleAdapter(db),
	providers: [Google],
	session: {
		strategy: "database",
	},
});
