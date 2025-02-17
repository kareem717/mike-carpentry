import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		BEEHIIV_API_KEY: z.string().min(1),
		BEEHIIV_PUBLICATION_ID: z.string().min(1),
	},
	client: {
		NEXT_PUBLIC_APP_URL: z.string().url().min(1),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
	},
});
