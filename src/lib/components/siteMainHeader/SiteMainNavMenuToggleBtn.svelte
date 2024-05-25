<script>
	import { navigating } from '$app/stores';

	import { MAIN_NAV_ID, navigationMenuState } from './SiteMainNav.svelte';

	// Close the site nav menu when navigating
	$effect(() => {
		if ($navigating) navigationMenuState.isOpen = false;
	});

	// Prevent scrolling when site nav menu is open
	$effect(() => {
		document.body.style.overflow = navigationMenuState.isOpen ? 'hidden' : 'auto';
	});
</script>

<button
	aria-controls={MAIN_NAV_ID}
	aria-expanded={navigationMenuState.isOpen}
	aria-label="Toggle Main Navigation"
	onclick={() => (navigationMenuState.isOpen = !navigationMenuState.isOpen)}
	class="p-2 border rounded sm:hidden"
>
	<span></span>
	<span></span>
	<span></span>
</button>

<style lang="postcss">
	button span {
		@apply block h-[0.1875rem] w-7 rounded bg-foreground transition-transform duration-300 ease-in-out;

		&:not(:last-of-type) {
			margin-block-end: 0.375rem;
		}
	}

	button[aria-expanded='true'] {
		span:nth-child(2) {
			opacity: 0;
		}

		span:nth-child(1) {
			transform: translateY(0.5625rem) rotate(45deg);
		}

		span:nth-child(3) {
			transform: translateY(-0.5625rem) rotate(-45deg);
		}
	}
</style>
