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

const linkData = [
	{ title: 'Home', href: route('/'), ariaLabel: 'Go to homepage' },
	{ title: 'About', href: route('/about'), ariaLabel: 'Go to about page' }
];

export const mainNavLinks: NavLink[] = linkData.map((link) =>
	createNavLink(link.title, link.href, link.ariaLabel)
);
