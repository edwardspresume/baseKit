<script>
	import '../app.pcss';

	import { Bar } from '@bobbymannino/svelte-progress';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';

	import SiteMainHeader from '$components/siteMainHeader/SiteMainHeader.svelte';
</script>

<Bar color="#6D28D9" size="big" speed="fast" />

<Toaster richColors closeButton position="top-right" />

<ModeWatcher />

<div class="flex flex-col h-[100svh]">
	<SiteMainHeader />

	<main class="container flex-1 p-2 pb-10">
		<slot />
	</main>
</div>
