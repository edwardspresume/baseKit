<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/styleTransitionUtils';
	import type { EnterKeyHintType } from '$lib/utils/types';

	import Label from '$components/ui/label/label.svelte';
	import Textarea from '$components/ui/textarea/textarea.svelte';

	type Props = {
		class?: HTMLTextareaAttributes['class'];
		value?: string | undefined;
		name: string;
		label: string;
		placeholder: string;
		errorMessage: string[] | undefined;
		spellcheck?: boolean;
		enterkeyhint?: EnterKeyHintType;
		maxlength?: number;
	};

	let {
		class: className,
		value = $bindable(),
		name = '',
		label = '',
		placeholder = '',
		errorMessage,
		spellcheck = true,
		enterkeyhint = 'enter',
		maxlength,
		...restProps
	}: Props = $props();

	let valueLength = $derived(value?.length || 0);
</script>

<Label class="grid gap-2">
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

	<Textarea
		{name}
		dir="auto"
		bind:value
		{maxlength}
		{spellcheck}
		{placeholder}
		{enterkeyhint}
		aria-label={label}
		class={cn(className)}
		aria-invalid={errorMessage ? 'true' : undefined}
		{...restProps}
	/>
</Label>
