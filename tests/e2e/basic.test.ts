import { expect, test } from '@playwright/test';
import { siteMetaData } from '../../src/lib/constants';

test.describe('Basic home page tests', () => {
	test('SEO tags are present', async ({ page }) => {
		await page.goto('/');

		// Check for the presence of the title tag
		const title = await page.title();
		expect(title).toBe(siteMetaData.title);

		// Check for the presence of the meta description
		const description = await page.locator('meta[name="description"]').getAttribute('content');
		expect(description).toBe(siteMetaData.description);
	});

	test('verify page heading and toast message', async ({ page }) => {
		// Navigate to the home page
		await page.goto('/');

		// Check if the heading 'Home page' is visible
		const heading = page.getByRole('heading', { name: 'Home page' });
		await expect(heading).toBeVisible();

		// Click the button that shows the toast
		const showToastButton = page.getByRole('button', { name: 'Show toast' });
		await showToastButton.click();

		// Verify the toast message 'Hello world' is displayed
		await expect(page.locator('text=Hello world!')).toBeVisible();
	});
});
