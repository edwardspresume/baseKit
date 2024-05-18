<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { resetMode, setMode } from 'mode-watcher';

	import { cn } from '$lib/utils/styleTransitionUtils';

	import Button from '$components/ui/button/button.svelte';
	import * as DropdownMenu from '$components/ui/dropdown-menu';

	const {
		class: className
	}: {
		class?: HTMLAttributes<HTMLElement>['class'];
	} = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon" class={cn('text-2xl', className)}>
			<iconify-icon icon="line-md:sun-rising-loop" class="dark:hidden"></iconify-icon>
			<iconify-icon icon="line-md:moon-rising-loop" class="hidden dark:block"></iconify-icon>

			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="mt-2">
		<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
