import { z } from 'zod';

const MIN_FEEDBACK_LENGTH = 10;

export const FeedbackValidationZodSchema = z.object({
	message: z
		.string()
		.min(MIN_FEEDBACK_LENGTH, `Message must be at least ${MIN_FEEDBACK_LENGTH} characters`)
		.transform((str) => str.trim())
});

export type FeedbackValidationSchemaType = typeof FeedbackValidationZodSchema;
