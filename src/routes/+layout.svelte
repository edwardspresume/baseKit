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

<SiteMainHeader />

<main>
	<slot />
</main>
