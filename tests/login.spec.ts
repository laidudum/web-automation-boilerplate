import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('should submit the form and display a success message', async ({ page }) => {
    // Navigate to the form page
    await page.goto('https://example.com/form');

    // Fill out the form fields
    await page.locator('input[name="firstName"]').fill('John');
    await page.locator('input[name="lastName"]').fill('Doe');
    await page.locator('input[name="email"]').fill('john.doe@example.com');

    // Submit the form
    await page.locator('button[type="submit"]').click();

    // Verify that a success message is displayed
    await expect(page.locator('.success-message')).toHaveText('Form submitted successfully!');

    // Optionally, verify that the form fields are cleared
    await expect(page.locator('input[name="firstName"]')).toHaveValue('');
    await expect(page.locator('input[name="lastName"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
  });
});