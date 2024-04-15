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

export const visitorAndEmployeePageNavLinks = {
	checkIn: createNavLink({
		title: 'Check In',
		href: route('/')
	}),

	checkOut: createNavLink({
		title: 'Check Out',
		href: route('/check-out')
	}),

	employeeCovidScreening: createNavLink({
		title: 'Employee Covid Screening',
		href: route('/employee-covid-screening')
	})
} as const;

export const adminPagesNavLinks = {
	visitorsLog: createNavLink({
		title: 'Visitor Log',
		href: route('/admin')
	}),

	employeeCovidScreening: createNavLink({
		title: 'Employee Covid Screening',
		href: route('/admin/employee-covid-screening')
	}),

	allowedVisitors: createNavLink({
		title: 'Allowed Visitors',
		href: route('/admin/allowed-visitors')
	})
} as const;
