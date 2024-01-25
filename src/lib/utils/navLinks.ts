import { route } from '$lib/ROUTES';
import type { AriaAttributes } from 'svelte/elements';

// Type for navigation link
export type NavLink = {
	href: string;
	title: string;
	ariaLabel?: AriaAttributes['aria-label'];
	isExternal?: boolean;
};

export const createNavLink = ({ title, href, ariaLabel, isExternal }: NavLink) => {
	if (!title || !href) {
		throw new Error('Title and href are required to create a NavLink');
	}

	return {
		title,
		href,
		ariaLabel: ariaLabel ?? title,
		isExternal
	};
};

export const mainNavLinks = {
	home: createNavLink({
		title: 'Home',
		href: route('/'),
		ariaLabel: 'Go to home page'
	}),

	about: createNavLink({
		title: 'About',
		href: route('/about'),
		ariaLabel: 'Go to about page'
	})
} as const;
