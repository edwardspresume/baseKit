import { SECRET_GMAIL_PASS, SECRET_GMAIL_USERNAME } from '$env/static/private';
import type { Actions } from './$types';

import nodemailer from 'nodemailer';

import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms/server';

import { logError, sanitizeContent } from '$lib/utils';

import { FeedbackValidationZodSchema } from '$validations/feedbackValidationZodSchema';

const emailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: SECRET_GMAIL_USERNAME,
		pass: SECRET_GMAIL_PASS
	}
});

export const actions: Actions = {
	default: async ({ request }) => {
		const feedbackForm = await superValidate(request, zod(FeedbackValidationZodSchema));

		if (!feedbackForm.valid) {
			return message(feedbackForm, {
				alertType: 'error',
				alertText: 'The message you entered is invalid. Please enter a valid message'
			});
		}

		const { message: feedbackMessage } = feedbackForm.data;

		const sanitizedMessage = sanitizeContent(feedbackMessage);

		try {
			const feedbackEmailResponse = await emailTransporter.sendMail({
				from: SECRET_GMAIL_USERNAME,
				to: SECRET_GMAIL_USERNAME,
				subject: `Feedback`,
				html: `
                <h2>New Feedback</h2>
                <p>${sanitizedMessage}</p>
            `
			});

			console.log({ feedbackEmailResponse });

			return message(feedbackForm, {
				alertType: 'success',
				alertText: 'Message sent!'
			});
		} catch (error) {
			logError(error, 'Error sending feedback email');

			return message(
				feedbackForm,
				{
					alertType: 'error',
					alertText: `There was an error sending your message. Please try again later.`
				},
				{
					status: 500
				}
			);
		}
	}
};
