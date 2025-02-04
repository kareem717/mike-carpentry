import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},
	client: {
		NEXT_PUBLIC_APP_URL: z
			.string()
			.url()
			.min(1)
			.default("http://localhost:3000"),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
	},
});
