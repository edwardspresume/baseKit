import type { AriaAttributes } from 'svelte/elements';
import { route } from './ROUTES';

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
 * @param {string} title - Display text for the link.
 * @param {string} href - Route path for navigation
 * @param {string} [ariaLabel=title] - Accessible label for the link; defaults to the title.
 * @param {boolean} [isExternal=false] - Indicates if the link leads outside the app (e.g., to an external site).
 * @returns {NavigationLink} An object representing the navigation link.
 * @throws {Error} Throws an error if title or path is not provided.
 */
export const createNavLink = (
	title: string,
	href: string,
	ariaLabel: AriaAttributes['aria-label'] = title,
	isExternal: boolean = false
): NavLink => {
	if (!title || !href) {
		throw new Error('Title and href are required to create a NavLink');
	}

	return {
		title,
		href,
		ariaLabel,
		isExternal
	};
};

const linkData = [
	{ title: 'Home', href: route('/'), ariaLabel: 'Go to homepage' },
	{ title: 'About', href: route('/about'), ariaLabel: 'Go to about page' }
];

export const mainNavLinks: NavLink[] = linkData.map((link) =>
	createNavLink(link.title, link.href, link.ariaLabel)
);
