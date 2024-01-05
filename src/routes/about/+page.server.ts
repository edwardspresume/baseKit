import type { PageServerLoad } from './$types';

import { createPageMetaTags } from '$lib/utils/metaTags';

export const load = (async () => {
	const pageMetaTags = createPageMetaTags({
		title: 'About page',
		description: 'About page description',
		openGraph: {
			title: 'Open Graph Title about page',
			description: 'Open Graph Description about page'
		}
	});

	return {
		pageMetaTags: Object.freeze(pageMetaTags)
	};
}) satisfies PageServerLoad;
