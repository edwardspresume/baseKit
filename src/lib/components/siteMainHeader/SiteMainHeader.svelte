<script>
	import { route } from '$lib/ROUTES';

	import FeedbackForm from '$components/form/FeedbackForm.svelte';
	import SiteMainNav from './SiteMainNav.svelte';
	import ThemeToggler from './ThemeToggler.svelte';
</script>

<header class="relative mb-10 border-b">
	<div class="container flex items-center justify-between p-2">
		<a href={route('/')} class="text-2xl font-bold">Logo</a>

		<div class="flex gap-2">
			<FeedbackForm />
			<ThemeToggler />
			<SiteMainNav />
		</div>
	</div>
</header>
