<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	import type { EnterKeyHintType } from '$lib/types';
	import { cn } from '$lib/utils/styleTransitionUtils';

	import Label from '$components/ui/label/label.svelte';
	import Textarea from '$components/ui/textarea/textarea.svelte';

	let className: HTMLTextareaAttributes['class'] = undefined;
	export { className as class };
	export let value: string | undefined = '';
	export let name: string = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let spellcheck: boolean = true;
	export let enterkeyhint: EnterKeyHintType = 'enter';
	export let maxlength: number | undefined = undefined;
	export let errorMessage: object | undefined = undefined;

	$: valueLength = value?.length || 0;
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
		{...$$restProps}
	/>
</Label>
