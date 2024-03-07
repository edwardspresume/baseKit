import { z } from 'zod';

export const MAX_FILE_SIZE_MB = 20;

export const SUPPORTED_IMAGE_TYPES = ['jpeg', 'png', 'webp', 'avif', 'gif'];

export const IMAGE_VALIDATION_ERROR_MESSAGES = {
	noFileUploaded: 'Please upload a file.',
	fileEmpty: 'The file you uploaded is empty.',
	fileTooLarge: `The file size must be less than ${MAX_FILE_SIZE_MB} MB.`,
	unsupportedImageType: `The image type you uploaded is not supported. Please upload an image of one of the following types: ${SUPPORTED_IMAGE_TYPES.join(
		', '
	)}.`
};

export const imageValidationZodSchema = z.object({
	uploadedImage: z
		.instanceof(File, { message: IMAGE_VALIDATION_ERROR_MESSAGES.noFileUploaded })
		.refine((file) => file.size > 0, IMAGE_VALIDATION_ERROR_MESSAGES.fileEmpty)
		.refine((file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
			message: IMAGE_VALIDATION_ERROR_MESSAGES.fileTooLarge
		})
		.refine(
			(file) => {
				const imageType = file.type.split('/')[1];
				return imageType ? SUPPORTED_IMAGE_TYPES.includes(imageType) : false;
			},
			{
				message: IMAGE_VALIDATION_ERROR_MESSAGES.unsupportedImageType
			}
		)
});
