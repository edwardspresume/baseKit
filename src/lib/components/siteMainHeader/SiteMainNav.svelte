<script context="module" lang="ts">
	export const MAIN_NAV_ID: string = 'main_nav';
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/styleTransitionUtils';

	import SiteMainNavMenuToggleBtn, { isSiteNavMenuOpen } from './SiteMainNavMenuToggleBtn.svelte';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;
	export { className as class };
</script>

<SiteMainNavMenuToggleBtn />

<nav
	id={MAIN_NAV_ID}
	aria-label="Main Navigation"
	class={cn(
		`absolute z-50 top-full left-0 h-[100svh] w-full px-4 pt-10 transition-transform duration-300 sm:h-full sm:relative sm:w-fit sm:-translate-x-0 sm:px-0  sm:pt-0 bg-secondary sm:bg-transparent ${
			!$isSiteNavMenuOpen ? '-translate-x-full' : ''
		}`,
		className
	)}
></nav>
