import { createEnv } from "@t3-oss/env-core";
import { vercel } from "@t3-oss/env-core/presets";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().min(1),
		AUTH_GOOGLE_ID: z.string().min(1),
		AUTH_GOOGLE_SECRET: z.string().min(1),
	},
	runtimeEnv: process.env,
	extends: [vercel()],
});
