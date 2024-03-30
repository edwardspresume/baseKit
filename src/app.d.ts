// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { MetaTagsProps } from 'svelte-meta-tags';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			pageMetaTags?: MetaTagsProps;
			isUserLoggedIn?: boolean;
			flash?: { type: 'success' | 'error'; message: string };
		}
		// interface PageState {}
		// interface Platform {}

		namespace Superforms {
			type Message = {
				alertType: 'success' | 'error' | 'warning' | 'info';
				alertText: string;
			};
		}
	}
}

export { };
