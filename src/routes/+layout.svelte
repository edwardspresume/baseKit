<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	import { Toaster } from '$components/ui/sonner';
	import { inject } from '@vercel/analytics';
	import extend from 'just-extend';
	import { ModeWatcher } from 'mode-watcher';
	import { MetaTags } from 'svelte-meta-tags';
	import { toast } from 'svelte-sonner';
	import { getFlash } from 'sveltekit-flash-message';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import { route } from '$lib/ROUTES';
	import { mainNavLinks } from '$lib/utils/navLinks';

	import '../app.pcss';

	import SiteMainHeader from '$components/siteMainHeader/SiteMainHeader.svelte';

	const { data, children } = $props();

	const flash = getFlash(page);

	let metaTags = $state({});

	inject({ mode: dev ? 'development' : 'production' });

	setupViewTransition();

	$effect(() => {
		if ($flash) toast[$flash.type]($flash.message);
	});

	$effect(() => {
		metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
	});
</script>

<MetaTags {...metaTags} />

<Toaster richColors closeButton position={'top-center'} />
<ModeWatcher />

<SiteMainHeader heading="Logo" headingHref={route('/')} navLinks={mainNavLinks} />

<main class="container flex-1 p-2 pb-10">
	{@render children()}
</main>
