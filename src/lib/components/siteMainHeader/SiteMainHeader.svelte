<script>
	import { route } from '$lib/ROUTES';
	
	import SiteMainNav from './SiteMainNav.svelte';
</script>

<header class="relative border-b">
	<div class="container flex items-center justify-between p-2">
		<a href={route('/')} class="text-2xl font-bold">Logo</a>

		<SiteMainNav />
	</div>
</header>
