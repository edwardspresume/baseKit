import { z } from 'zod';

export const NAME_MIN_LENGTH = 3;
export const NAME_MAX_LENGTH = 50;

export const NAME_MIN_LENGTH_ERROR_MESSAGE = `Name must be at least ${NAME_MIN_LENGTH} characters long.`;
export const NAME_MAX_LENGTH_ERROR_MESSAGE = `Name must be less than ${NAME_MAX_LENGTH} characters long`;

export const createNameSchema = () =>
	z
		.string()
		.min(NAME_MIN_LENGTH, NAME_MIN_LENGTH_ERROR_MESSAGE)
		.max(NAME_MAX_LENGTH, NAME_MAX_LENGTH_ERROR_MESSAGE)
		.trim()
		.regex(/^[a-zA-Z\s]*$/, 'Name should only contain alphabetic characters');

export const createEmailSchema = () =>
	z.string().email('Please enter a valid email address').max(255, 'Email is too long').trim();
