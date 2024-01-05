// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { MetaTagsProps } from 'svelte-meta-tags';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			pageMetaTags?: MetaTagsProps;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
