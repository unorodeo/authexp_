import { defineConfig } from "drizzle-kit";
import { env } from "./t3-env/server";

export default defineConfig({
	schema: "./database/schema.ts",
	out: "./database/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
