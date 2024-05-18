<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/styleTransitionUtils';

	import Button from '$components/ui/button/button.svelte';

	let {
		children,
		disabled,
		formaction,
		showSpinner,
		class: className
	}: {
		children?: Snippet;
		disabled?: boolean;
		formaction?: string | null;
		showSpinner?: boolean | undefined;
		class?: HTMLButtonAttributes['class'];
	} = $props();
</script>

<Button
	{disabled}
	{formaction}
	type="submit"
	aria-disabled={disabled}
	class={cn('gap-2', className)}
>
	{#if showSpinner === undefined ? disabled : showSpinner}
		<iconify-icon icon="eos-icons:bubble-loading"></iconify-icon>
	{/if}

	<span>
		{#if children}
			{@render children()}
		{:else}
			Submit
		{/if}
	</span>
</Button>
