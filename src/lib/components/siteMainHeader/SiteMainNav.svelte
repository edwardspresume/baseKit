<script context="module" lang="ts">
	import { writable } from 'svelte/store';

	export const MAIN_NAV_ID: string = 'main_nav';

	export const isSiteNavMenuOpen = writable(false);
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { route } from '$lib/ROUTES';
	import { cn } from '$lib/utils/styleTransitionUtils';

	import Button from '$components/ui/button/button.svelte';
	import SiteMainNavMenuToggleBtn from './SiteMainNavMenuToggleBtn.svelte';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;
	export { className as class };
</script>

<SiteMainNavMenuToggleBtn />

<nav
	id={MAIN_NAV_ID}
	aria-label="Main Navigation"
	class={cn(
		`absolute left-0 z-50 order-first w-full px-4 pt-10 transition-transform duration-300 top-full h-svh sm:h-full sm:relative sm:w-fit sm:-translate-x-0 sm:p-0 bg-secondary sm:bg-transparent ${
			!$isSiteNavMenuOpen ? '-translate-x-full' : ''
		}`,
		className
	)}
>
	<ul class="grid gap-5 sm:gap-2 sm:flex *:*:w-full">
		<li>
			<Button href={route('/')} variant="outline">Home</Button>
		</li>
		<li>
			<Button href={route('/about')} variant="outline">About</Button>
		</li>
	</ul>
</nav>
