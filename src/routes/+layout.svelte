<script>
	import '../app.pcss';

	import { Bar } from '@bobbymannino/svelte-progress';

	import SiteMainHeader from '$components/siteMainHeader/SiteMainHeader.svelte';
</script>

<Bar color="#6D28D9" size="big" speed="fast" />

<SiteMainHeader />

<main>
	<slot />
</main>
