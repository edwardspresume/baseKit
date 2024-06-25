import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';
import tailwindNesting from 'tailwindcss/nesting/index.js';

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		//But others, like autoprefixer, need to run after,

		// Enable nesting of Tailwind CSS classes
		tailwindNesting,

		// Process Tailwind CSS directives and generate utility classes
		tailwindcss(),

		// Transform modern CSS features into browser-compatible CSS
		presetEnv({
			stage: 1,
			features: { 'nesting-rules': false }
		}),

		// Add vendor prefixes to CSS rules for cross-browser compatibility
		autoprefixer
	]
};

export default config;
