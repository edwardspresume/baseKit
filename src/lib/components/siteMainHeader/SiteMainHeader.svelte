<script>
	import { Routes } from '$lib/navLinks';

	import SiteMainNav from './SiteMainNav.svelte';
</script>

<header class="relative border-b">
	<div class="container flex items-center justify-between p-2">
		<a href={Routes.HOMEPAGE}>Logo</a>

		<SiteMainNav />
	</div>
</header>
