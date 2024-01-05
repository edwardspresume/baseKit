import type { MetaTagsProps } from 'svelte-meta-tags';

export function createBaseMetaTags(url: URL): MetaTagsProps {
	const canonicalUrl = new URL(url.pathname, url.origin).href;

	return {
		title: 'BaseKit',
		titleTemplate: '%s | Your Project Tagline',
		description: 'BaseKit is a SvelteKit template with pre-configured tools.',
		canonical: canonicalUrl,
		keywords: [
			'Basekit',
			'sveltekit',
			'svelte',
			'tailwindcss',
			'svelte-sonner',
			'svelte-meta-tags'
		],
		openGraph: {
			type: 'website',
			url: canonicalUrl,
			locale: 'en_IE',
			title: 'Open Graph Title',
			description: 'Open Graph Description',
			siteName: 'BaseKit',
			images: [
				{
					url: 'https://www.example.ie/og-image.jpg',
					alt: 'Og Image Alt',
					width: 800,
					height: 600,
					secureUrl: 'https://www.example.ie/og-image.jpg',
					type: 'image/jpeg'
				}
			]
		},
		twitter: {
			handle: '@edwardspresume',
			site: '@site',
			cardType: 'summary_large_image',
			title: 'Using More of Config',
			description: 'This example uses more of the available config options.',
			image: 'https://www.example.ie/twitter-image.jpg',
			imageAlt: 'Twitter image alt'
		},
		additionalLinkTags: [
			{
				rel: 'apple-touch-icon',
				href: '/favicons/apple-touch-icon.png'
			},
			{
				rel: 'icon',
				type: 'image/svg+xml',
				href: '/favicons/favicon.svg'
			},
			{
				rel: 'manifest',
				href: `/favicons/manifest.json`,
				crossOrigin: 'use-credentials'
			}
		]
	};
}

export function createPageMetaTags(metaTags: MetaTagsProps): MetaTagsProps {
	return metaTags;
}
