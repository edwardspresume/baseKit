import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		alias: {
			$assets: 'src/lib/assets',
			$components: 'src/lib/components',
			$validations: 'src/lib/validations'
		},

		// remove this if you don't want prerendering
		prerender: {
			entries: ['/sitemap.xml']
		}
	},

	csp: {
		directives: {
			'script-src': ['self']
		},
		reportOnly: {
			'script-src': ['self']
		}
	},

	vitePlugin: {
		inspector: true
	}
};

export default config;
