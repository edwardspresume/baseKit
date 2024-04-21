<script lang="ts">
	import { MAX_FILE_SIZE_MB } from '$validations/imageValidationZodSchema';

	export let chosenImageFile: File | null = null;
	export let errorMessage: object | undefined = undefined;

	let uploadedImageUrl: string | null = null;

	function handleImageUpload(event: Event) {
		const input = event.currentTarget as HTMLInputElement | null;

		chosenImageFile = input?.files?.item(0) as File;

		// Revoke the old URL if it exists
		if (uploadedImageUrl) {
			URL.revokeObjectURL(uploadedImageUrl);
		}

		uploadedImageUrl = URL.createObjectURL(chosenImageFile);
	}
</script>

<fieldset class="space-y-2">
	<label
		class="relative grid gap-2 p-4 text-sm text-center transition-colors duration-300 border-2 border-dashed rounded-md place-content-center justify-items-center border-foreground/30 hover:bg-accent/40"
	>
		<input
			type="file"
			name="image"
			accept="image/*"
			on:input={handleImageUpload}
			aria-invalid={errorMessage ? 'true' : undefined}
			class="absolute top-0 left-0 opacity-0 cursor-pointer size-full"
		/>

		{#if uploadedImageUrl}
			<img
				src={uploadedImageUrl}
				alt="Uploaded Preview"
				class="object-contain border rounded-md max-h-28 border-foreground/10"
			/>
		{:else}
			<iconify-icon icon="flat-color-icons:add-image" class="text-5xl"></iconify-icon>

			<p>
				Upload image or drag and drop

				<span class="text-sm text-muted-foreground">
					(Max file size: {MAX_FILE_SIZE_MB}MB)
				</span>
			</p>
		{/if}
	</label>

	{#if errorMessage}
		<p class="text-red-500">{errorMessage}</p>
	{/if}
</fieldset>
