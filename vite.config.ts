import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), kitRoutes()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['tests/unit/**/*.{test,spec}.{js,ts}']
	}
});
