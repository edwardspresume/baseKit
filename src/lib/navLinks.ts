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

/**
 * Create a NavLink object for use in navigation menus.
 *
 * @param title - The text to display for the navigation link.
 * @param path - The route path from the Routes enum that this link should navigate to.
 * @param ariaLabel - (Optional) The aria-label for the link, for accessibility. Defaults to the title if not provided.
 * @param isExternal - (Optional) Flag to indicate if the link is external to the application's routing context (e.g., linking to an external site).
 * @returns The NavLink object with the provided properties.
 * @throws Will throw an error if title or path is not provided.
 */
export const createNavLink = (
	title: string,
	path: Routes,
	ariaLabel?: AriaAttributes['aria-label'],
	isExternal: boolean | undefined = false
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
