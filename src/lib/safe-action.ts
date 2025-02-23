import {
	createSafeActionClient,
	DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";
import { zodAdapter } from "next-safe-action/adapters/zod";
import { Resend } from "resend";
import { env } from "./env";

export const actionClient = createSafeActionClient({
	validationAdapter: zodAdapter(),
	handleServerError: async (error) => {
		return {
			message: error.message ?? DEFAULT_SERVER_ERROR_MESSAGE,
			statusCode: 500,
		};
	},
});

export const mailClient = actionClient.use(async ({ ctx, next }) => {
	const resend = new Resend(env.RESEND_API_KEY);

	return next({
		ctx: {
			...ctx,
			resend,
		},
	});
});
