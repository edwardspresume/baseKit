<script context="module" lang="ts">
	export const MAIN_NAV_ID: string = 'main_nav';
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { IconMailFilled } from '@tabler/icons-svelte';

	import { cn } from '$lib';
	import { Routes } from '$lib/navLinks';

	import SiteNavMenuToggleBtn, { isSiteNavMenuOpen } from './SiteNavMenuToggleBtn.svelte';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;
	export { className as class };
</script>

<SiteNavMenuToggleBtn />

<nav
	id={MAIN_NAV_ID}
	aria-label="Main Navigation"
	class={cn(
		`absolute z-50 top-full left-0 h-[100svh] w-full px-4 pt-10 transition-transform duration-300 sm:h-full sm:relative sm:w-fit sm:-translate-x-0 sm:px-0  sm:pt-0 bg-secondary sm:bg-transparent ${
			!$isSiteNavMenuOpen ? '-translate-x-full' : ''
		}`,
		className
	)}
>
	<a
		href={Routes.CONTACT}
		tabindex={$isSiteNavMenuOpen ? 0 : -1}
		class="flex items-center justify-center w-full gap-2 p-2 transition-colors duration-300 border rounded hover:opacity-40 sm:text-xl whitespace-nowrap"
	>
		<IconMailFilled size={20} class="w-4 sm:w-full" />

		<span>Contact us</span>
	</a>
</nav>
