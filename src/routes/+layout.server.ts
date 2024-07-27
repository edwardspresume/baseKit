import type { LayoutServerLoad } from './$types';

import { loadFlash } from 'sveltekit-flash-message/server';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { createBaseMetaTags } from '$lib/utils/metaTags';

import { feedbackValidationZodSchema } from '$validations/feedbackValidationZodSchema';

export const load = loadFlash(async ({ url }) => {
	const baseMetaTags = createBaseMetaTags(url);

	return {
		baseMetaTags: Object.freeze(baseMetaTags),
		feedbackForm: await superValidate(zod(feedbackValidationZodSchema))
	};
}) satisfies LayoutServerLoad;
