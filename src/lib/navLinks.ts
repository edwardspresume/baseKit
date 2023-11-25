import type { AriaAttributes } from 'svelte/elements';

// Enum for route paths
export enum Routes {
	HOMEPAGE = '/',
	CONTACT = '/contact'
}

// Type for navigation link
export type NavLink = {
	href: string;
	title: string;
	ariaLabel?: AriaAttributes['aria-label'];
	isExternal?: boolean;
};

// Function to create a new navigation link
export const createNavLink = (
	title: string,
	path: Routes,
	ariaLabel?: AriaAttributes['aria-label'],
	isExternal?: boolean
): NavLink => {
	if (!title || !path) {
		throw new Error('Title and path are required to create a NavLink');
	}

	return {
		title,
		href: path,
		ariaLabel: ariaLabel || title,
		isExternal
	};
};

export const mainNavLinks: NavLink[] = [
	createNavLink('Home', Routes.HOMEPAGE, 'Go to homepage'),
	createNavLink('Contact', Routes.CONTACT, 'Go to contact page')
];
