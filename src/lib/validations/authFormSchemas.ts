import { z } from 'zod';

import { createEmailSchema } from './zodSchemaUtils';

const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 50;

const PASSWORD_MIN_ERROR_MESSAGE = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`;
const PASSWORD_MAX_ERROR_MESSAGE = `Password must be less than ${PASSWORD_MAX_LENGTH} characters long`;

const PASSWORD_SPECIAL_CHARS = '@$!%*?&#^()[]{}:;<>~`_+-=';
const PASSWORD_SPECIAL_CHARS_MESSAGE = `Requires a special character. Valid characters: ${PASSWORD_SPECIAL_CHARS}`;

const PASSWORD_LOWERCASE_MESSAGE = 'Requires a lowercase letter';
const PASSWORD_UPPERCASE_MESSAGE = 'Requires an uppercase letter';
const PASSWORD_NUMBER_MESSAGE = 'Requires a number';

const createPasswordSchema = () =>
	z
		.string()
		.min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_ERROR_MESSAGE)
		.max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_ERROR_MESSAGE)
		.trim()
		.refine((password) => /[a-z]/.test(password), { message: PASSWORD_LOWERCASE_MESSAGE })
		.refine((password) => /[A-Z]/.test(password), { message: PASSWORD_UPPERCASE_MESSAGE })
		.refine((password) => /\d/.test(password), { message: PASSWORD_NUMBER_MESSAGE })
		.refine(
			(password) => PASSWORD_SPECIAL_CHARS.split('').some((char) => password.includes(char)),
			{
				message: PASSWORD_SPECIAL_CHARS_MESSAGE
			}
		);

export const userLoginZodSchema = z.object({
	email: createEmailSchema(),
	password: z.string().min(1, 'Password is required').trim()
});

export const userRegisterZodSchema = z
	.object({
		email: createEmailSchema(),
		password: createPasswordSchema(),
		confirmPassword: z.string().min(1, 'Confirm password is required').trim()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword']
	});

export const passwordSetOrChangeZodSchema = z
	.object({
		password: createPasswordSchema(),
		confirmPassword: z.string(),
		token: z.string().optional()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword']
	});

export const passwordResetRequestZodSchema = z.object({
	email: createEmailSchema()
});
