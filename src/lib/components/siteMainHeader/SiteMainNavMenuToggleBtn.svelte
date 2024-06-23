<script>
	import { navigating } from '$app/stores';
	import { MAIN_NAV_ID, navigationMenuState } from './SiteMainNav.svelte';

	$effect(() => {
		// Close the site nav menu when navigating
		if ($navigating) navigationMenuState.isOpen = false;

		// Prevent scrolling when site nav menu is open
		document.body.style.overflow = navigationMenuState.isOpen ? 'hidden' : 'auto';
	});
</script>

<button
	aria-controls={MAIN_NAV_ID}
	aria-expanded={navigationMenuState.isOpen}
	aria-label="Toggle Main Navigation"
	onclick={() => (navigationMenuState.isOpen = !navigationMenuState.isOpen)}
	class="rounded border p-2 sm:hidden"
>
	<span></span>
	<span></span>
	<span></span>
</button>

<style lang="postcss">
	button span {
		--line-height: 0.187rem;
		--line-spacing: 0.41rem;

		@apply block w-6 rounded bg-foreground transition-all duration-300 ease-in-out;
		block-size: var(--line-height);
	}

	button span:not(:last-of-type) {
		margin-block-end: var(--line-spacing);
	}

	button[aria-expanded='true'] {
		span:nth-child(1) {
			transform: translateY(calc(var(--line-height) + var(--line-spacing))) rotate(45deg);
		}

		span:nth-child(2) {
			opacity: 0;
		}

		span:nth-child(3) {
			transform: translateY(calc(-1 * (var(--line-height) + var(--line-spacing)))) rotate(-45deg);
		}
	}
</style>
