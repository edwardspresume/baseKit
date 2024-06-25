<script lang="ts">
	import type { NavLinks } from '$lib/utils/navLinks';

	import Button from '$components/ui/button/button.svelte';
	import SiteMainNav from './SiteMainNav.svelte';
	import SiteMainNavMenuToggleBtn from './SiteMainNavMenuToggleBtn.svelte';
	import ThemeToggler from './ThemeToggler.svelte';

	type Props = {
		heading: string;
		headingHref: string;
		navLinks: NavLinks;
	};
	const { heading, headingHref, navLinks }: Props = $props();
</script>

<header class="relative mb-10 border-b border-accent-foreground/10">
	<div class="container flex items-center justify-between p-2">
		<Button href={headingHref} variant="link" class="p-0 text-2xl font-bold">
			{heading}
		</Button>

		<div class="flex items-center gap-2">
			<SiteMainNav {navLinks} />
			<ThemeToggler />
			<SiteMainNavMenuToggleBtn />
		</div>
	</div>
</header>
