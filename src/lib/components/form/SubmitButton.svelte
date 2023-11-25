<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import { IconLoader2 } from '@tabler/icons-svelte';

	import { cn } from '$lib/index';

	let className: HTMLButtonAttributes['class'] = undefined;

	export { className as class };
	export let disabled: boolean = false;
	export let showSpinner: boolean | null = null;
</script>

<button
	{disabled}
	type="submit"
	aria-disabled={disabled}
	class={cn(
		'font-bold flex gap-2 items-center w-full border px-2 py-3 rounded-lg justify-center duration-300 transition-colors hover:bg-primary',
		className
	)}
>
	{#if showSpinner === null ? disabled : showSpinner}
		<IconLoader2 class="animate-spin" />
	{/if}

	<span>
		<slot>Submit</slot>
	</span>
</button>
