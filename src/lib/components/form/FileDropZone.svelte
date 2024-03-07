<script lang="ts">
	import { toast } from 'svelte-sonner';

	import {
		MAX_FILE_SIZE_MB,
		imageValidationZodSchema
	} from '$validations/imageValidationZodSchema';

	let uploadedImageUrl: string | null = null;

	function handleImageUpload(event: Event) {
		const input = event.target as HTMLInputElement;

		if (input.files?.[0]) {
			const file = input.files[0];
			const imageValidationResult = imageValidationZodSchema.safeParse({ uploadedImage: file });

			if (!imageValidationResult.success) {
				const errorMessage =
					imageValidationResult.error.errors[0]?.message || 'An unexpected error occurred';

				toast.error(errorMessage);

				// Reset input to allow re-triggering upload of the same file, enabling error message display on repeated attempts.
				input.value = '';

				return;
			}

			try {
				// Revoke the old URL if it exists
				uploadedImageUrl && URL.revokeObjectURL(uploadedImageUrl);
				uploadedImageUrl = URL.createObjectURL(file);

				// Reset caption when a new image is uploaded
			} catch (e) {
				toast.error('Failed to upload image. Please try again.');
			}
		}
	}
</script>

<label
	class="relative grid place-content-center justify-items-center gap-2 rounded-md border-2 border-dashed border-foreground/30 p-4 text-center text-sm transition-colors duration-300 hover:bg-accent/40"
>
	<input
		type="file"
		accept="image/*"
		name="uploadedImage"
		class="absolute left-0 top-0 size-full cursor-pointer opacity-0"
		data-testid="file-drop-zone-input"
		on:change={handleImageUpload}
	/>

	{#if uploadedImageUrl}
		<img
			src={uploadedImageUrl}
			alt="Uploaded Preview"
			class="max-h-28 rounded-md border border-foreground/10 object-contain"
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
