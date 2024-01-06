import type { PageServerLoad } from './$types';

import { createPageMetaTags } from '$lib/utils/metaTags';

export const load = (async () => {
	const pageMetaTags = createPageMetaTags({
		title: 'About page',
		description: 'About page description'
	});

	return {
		pageMetaTags: Object.freeze(pageMetaTags)
	};
}) satisfies PageServerLoad;
