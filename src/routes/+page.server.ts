import type { PageServerLoad } from './$types';

import { createPageMetaTags } from '$lib/utils/metaTags';

export const load: PageServerLoad = async () => {
	const pageMetaTags = createPageMetaTags({
		title: 'Home page',
		description: 'Home page description',
		openGraph: {
			title: 'Open Graph Title home page',
			description: 'Open Graph Description home page'
		}
	});

	return {
		pageMetaTags: Object.freeze(pageMetaTags)
	};
};
