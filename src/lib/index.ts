import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to merge class names using clsx and tailwind-merge.
 * It takes any number of class values and merges them into a single string with deduplication and conflict resolution for Tailwind CSS classes.
 *
 * @param inputs - An array of class values to be merged.
 * @returns A string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
