<script context="module" lang="ts">
	export const MAIN_NAV_ID: string = 'main_navigation_id';

	export const navigationMenuState = $state({
		isOpen: false
	});
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { HTMLAttributes } from 'svelte/elements';

	import type { NavLinks } from '$lib/utils/navLinks';
	import { cn } from '$lib/utils/styleTransitionUtils';

	import Button from '$components/ui/button/button.svelte';

	const {
		navLinks,
		class: className
	}: {
		navLinks: NavLinks;
		class?: HTMLAttributes<HTMLElement>['class'];
	} = $props();

	// Computes classes based on the navigation menu state
	const dynamicClasses = $derived(navigationMenuState.isOpen ? '' : '-translate-x-full');

	// Defines static classes for the navigation component
	const staticClasses =
		'absolute left-0 z-50 w-full px-4 pt-10 border-t border-accent-foreground/10 transition-transform duration-300 top-full h-svh sm:h-full sm:relative sm:border-t-0 sm:w-fit sm:-translate-x-0 sm:p-0 bg-secondary sm:bg-transparent';
</script>

<nav
	id={MAIN_NAV_ID}
	aria-label="Main Navigation"
	class={cn(staticClasses, dynamicClasses, className)}
>
	<ul class="grid gap-5 *:*:w-full sm:flex sm:gap-2">
		{#each Object.values(navLinks) as link}
			{@const isCurrentPage = $page.url.pathname === link.href ? 'page' : undefined}

			<li>
				<Button
					size="sm"
					href={link.href}
					variant="outline"
					aria-label={link.ariaLabel}
					aria-current={isCurrentPage}
					class={isCurrentPage
						? 'bg-accent-foreground font-semibold text-background'
						: 'text-muted-foreground'}
				>
					{link.title}
				</Button>
			</li>
		{/each}
	</ul>
</nav>
