/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1500px'
			}
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary-color)'
				},
				secondary: {
					DEFAULT: 'var(--secondary-color)'
				},
				tertiary: {
					DEFAULT: 'var(--tertiary-color)'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
