<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '../app.pcss';

	import { Toaster } from '$components/ui/sonner';
	import { Bar } from '@bobbymannino/svelte-progress';
	import { ModeWatcher } from 'mode-watcher';

	import { siteMetaData } from '$lib/constants';

	import SiteMainHeader from '$components/siteMainHeader/SiteMainHeader.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Bar color="#6D28D9" size="big" speed="fast" />

<Toaster richColors closeButton />

<ModeWatcher />

<svelte:head>
	<title>{siteMetaData.title}</title>
	<meta name="description" content={siteMetaData.description} />
</svelte:head>

<div class="flex flex-col h-svh">
	<SiteMainHeader />

	<main class="container flex-1 p-2 pb-10">
		<slot />
	</main>

	<footer class="px-2 py-3 border-t">
		<div class="container mx-auto">
			<p class="text-sm text-center">
				Created by <a
					href="https://twitter.com/edwardspresume"
					target="_blank"
					class="italic text-blue-400 hover:text-blue-500 hover:underline">Edwards Presume</a
				>
			</p>
		</div>
	</footer>
</div>
