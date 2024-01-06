import type { AriaAttributes } from 'svelte/elements';
import { route } from './ROUTES';

// Type for navigation link
export type NavLink = {
	href: string;
	title: string;
	ariaLabel?: AriaAttributes['aria-label'];
	isExternal?: boolean;
};

export const createNavLink = (
	title: string,
	href: string,
	ariaLabel: AriaAttributes['aria-label'] = title,
	isExternal: boolean = false
) => {
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

export const mainNavLinks = {
	home: createNavLink('Home', route('/'), 'Go to homepage'),
	about: createNavLink('About', route('/about'), 'Go to about page')
} as const;
