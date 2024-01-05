import { expect, test } from '@playwright/test';

test('Test root error boundary catches errors', async ({ page }) => {
	const pageUrl = '/does-not-exist';

	const response = await page.goto(pageUrl);

	// Check if the response is a 404
	expect(response?.status()).toBe(404);

	const pageHeading = page.locator('text="404 - Page Not Found"');

	// Check if the page heading is visible
	expect(await pageHeading.isVisible()).toBe(true);

	// Additional check: Verify the page heading text
	expect(await pageHeading.textContent()).toBe('404 - Page Not Found');
});
