<script lang="ts">
	import type { PageData } from './$types';

	import { toast } from 'svelte-sonner';

	import Button from '$components/ui/button/button.svelte';

	export let data: PageData;
</script>

<h1 class="text-2xl font-bold">Home page</h1>

<Button class="mt-5" on:click={() => toast('Hello world!')}>Show toast</Button>
