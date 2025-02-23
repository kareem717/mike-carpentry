"use server";

import { mailClient } from "@/lib/safe-action";
import { contactMessageSchema } from "./validations";
import { contact } from "@/lib/config/contact";

export const sendContactMessageAction = mailClient
	.schema(contactMessageSchema)
	.action(async ({ parsedInput, ctx: { resend } }) => {
		const { data, error } = await resend.emails.send({
			from: contact.email.inbound,
			to: [contact.email.inbound],
			subject: `${parsedInput.name} | Contact Form Submission`,
			//TODO: use a nice template
			text: JSON.stringify(parsedInput, null, 2),
		});

		if (error) {
			throw new Error(JSON.stringify(error))
		}

		return { data };
	});
