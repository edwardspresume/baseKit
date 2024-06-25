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

	type Props = {
		navLinks: NavLinks;
		class?: HTMLAttributes<HTMLElement>['class'];
	};

	const { navLinks, class: className }: Props = $props();
</script>

<nav
	id={MAIN_NAV_ID}
	aria-label="Main Navigation"
	class:-translate-x-full={!navigationMenuState.isOpen}
	class={cn(
		'absolute left-0 top-full z-50 h-svh w-full border-t border-accent-foreground/10 bg-secondary px-4 pt-10 transition-transform duration-300 sm:relative sm:h-full sm:w-fit sm:-translate-x-0 sm:border-t-0 sm:bg-transparent sm:p-0',
		className
	)}
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
