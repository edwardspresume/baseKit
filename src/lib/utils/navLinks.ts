import { route } from '$lib/ROUTES';
import type { AriaAttributes } from 'svelte/elements';

export type NavLink = {
	href: string;
	title: string;
	ariaLabel?: AriaAttributes['aria-label'];
	isExternal?: boolean;
};

export type NavLinks = {
	[key: string]: NavLink;
};

export const createNavLink = ({ title, href, ariaLabel, isExternal }: Partial<NavLink>) => {
	if (!title || !href) {
		throw new Error(
			`Title and href are required to create a NavLink. Received title: ${title}, href: ${href}`
		);
	}

	ariaLabel = ariaLabel ?? `Go to ${title.toLowerCase()} page`;

	return {
		title,
		href,
		ariaLabel,
		isExternal: isExternal ?? false
	};
};

export const mainNavLinks = {
	home: createNavLink({
		title: 'Home',
		href: route('/')
	}),

	about: createNavLink({
		title: 'About',
		href: route('/about')
	})
} as const;
