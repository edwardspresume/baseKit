<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	import type { EnterKeyHintType } from '$lib/utils/types';
	import { cn } from '$lib/utils/styleTransitionUtils';

	type Props = {
		class?: HTMLInputAttributes['class'];
		type: HTMLInputAttributes['type'];
		value?: string | null | undefined;
		name: string;
		label: string;
		placeholder: string;
		spellcheck?: boolean;
		autocomplete?: string;
		enterkeyhint?: EnterKeyHintType;
		maxlength?: number;
		errorMessage?: object | undefined;
	};

	let {
		class: className,
		type,
		value = $bindable(),
		name = '',
		label = '',
		placeholder = '',
		spellcheck = true,
		autocomplete = 'on',
		enterkeyhint = 'next',
		maxlength,
		errorMessage,
		...restProps
	}: Props = $props();

	let valueLength = $derived(value?.length || 0);
</script>

<label
	class="grid gap-1 text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
>
	<div>
		<span>{label}</span>

		{#if maxlength}
			<span class="text-xs text-muted-foreground">
				{valueLength}/{maxlength}
			</span>
		{/if}
	</div>

	{#if errorMessage}
		<p class="text-red-500">{errorMessage}</p>
	{/if}

	<input
		{name}
		{type}
		dir="auto"
		bind:value
		{maxlength}
		{spellcheck}
		{placeholder}
		{autocomplete}
		{enterkeyhint}
		aria-label={label}
		class={cn('rounded border bg-transparent px-3 py-2', className)}
		aria-invalid={errorMessage ? 'true' : undefined}
		{...restProps}
	/>
</label>
