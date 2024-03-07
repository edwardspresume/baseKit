<script lang="ts">
	import { page } from '$app/stores';

	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { toast } from 'svelte-sonner';

	import { FeedbackValidationSchema } from '$validations/feedbackValidationZodSchema';

	import { route } from '$lib/ROUTES';

	import { buttonVariants } from '$components/ui/button';
	import * as Dialog from '$components/ui/dialog';
	import SubmitButton from './SubmitButton.svelte';
	import TextArea from './TextArea.svelte';

	const { enhance, form, errors, message, delayed } = superForm($page.data['feedbackForm'], {
		id: 'feedbackForm',
		validators: zodClient(FeedbackValidationSchema),

		onUpdated: () => {
			if (!$message) return;

			const { alertType, alertText } = $message;

			if (alertType === 'error') {
				toast.error(alertText);
			}

			if (alertType === 'success') {
				toast.success(alertText);
			}
		}
	});
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Feedback</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Feedback</Dialog.Title>
			<Dialog.Description>
				Let me know if you experience any issues or have any suggestions to improve this app
			</Dialog.Description>
		</Dialog.Header>
		<form
			use:enhance
			method="POST"
			action={route('default /sendFeedbackToEmail')}
			aria-label="Send feedback"
			class="grid gap-5"
		>
			<TextArea
				rows="6"
				name="message"
				label="Message"
				placeholder="Enter your message"
				bind:value={$form['message']}
				errorMessage={$errors['message']}
			/>

			<SubmitButton disabled={$delayed}>
				{$delayed ? 'Sending...' : 'Send'}
			</SubmitButton>
		</form>
	</Dialog.Content>
</Dialog.Root>
