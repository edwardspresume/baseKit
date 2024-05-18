import { z } from 'zod';

import { createEmailSchema } from './zodSchemaUtils';

const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 50;

const PASSWORD_MIN_ERROR_MESSAGE = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`;
const PASSWORD_MAX_ERROR_MESSAGE = `Password must be less than ${PASSWORD_MAX_LENGTH} characters long`;

const PASSWORD_SPECIAL_CHARS = '@$!%*?&';
const PASSWORD_SPECIAL_CHARS_MESSAGE = ` Requires a special character: (${PASSWORD_SPECIAL_CHARS.split('').join(', ')})`;

const createPasswordSchema = () =>
	z
		.string()
		.min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_ERROR_MESSAGE)
		.max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_ERROR_MESSAGE)
		.trim()
		.refine((password) => /[a-z]/.test(password), { message: ' Requires a lowercase letter' })
		.refine((password) => /[A-Z]/.test(password), { message: ' Requires an uppercase letter' })
		.refine((password) => /\d/.test(password), { message: ' Requires a number' })
		.refine((password) => new RegExp(`[${PASSWORD_SPECIAL_CHARS}]`).test(password), {
			message: PASSWORD_SPECIAL_CHARS_MESSAGE
		});

export const userLoginZodSchema = z.object({
	email: createEmailSchema(),
	password: z.string().min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_ERROR_MESSAGE)
});

export const passwordSetOrChangeZodSchema = z
	.object({
		password: createPasswordSchema(),
		confirmPassword: createPasswordSchema(),
		token: z.string().optional()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword']
	});

export const passwordResetRequestZodSchema = z.object({
	email: createEmailSchema()
});
