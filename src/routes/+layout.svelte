<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	import { inject } from '@vercel/analytics';

	import { Toaster } from '$components/ui/sonner';
	import { Bar } from '@bobbymannino/svelte-progress';
	import { ModeWatcher } from 'mode-watcher';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import extend from 'just-extend';
	import { MetaTags } from 'svelte-meta-tags';

	import '../app.pcss';

	import SiteMainHeader from '$components/siteMainHeader/SiteMainHeader.svelte';

	export let data;

	inject({ mode: dev ? 'development' : 'production' });

	setupViewTransition();

	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
</script>

<MetaTags {...metaTags} />

<Bar color="#6D28D9" size="big" speed="fast" />
<Toaster richColors closeButton />
<ModeWatcher />

<div class="flex h-svh flex-col">
	<SiteMainHeader />

	<main class="container flex-1 p-2 pb-10">
		<slot />
	</main>

	<footer class="border-t px-2 py-3">
		<div class="container mx-auto">
			<p class="text-center text-sm">
				Created by <a
					href="https://twitter.com/edwardspresume"
					target="_blank"
					class="italic text-blue-400 hover:text-blue-500 hover:underline">Edwards Presume</a
				>
			</p>
		</div>
	</footer>
</div>
