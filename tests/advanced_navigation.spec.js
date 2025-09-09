// Import Playwright's test and assertion utilities
import { test, expect } from '@playwright/test';

// Define a test case
test('test', async ({ page }) => {
  // Navigate to the redirector page
  await page.goto('https://the-internet.herokuapp.com/redirector');

  // Click the "here" link to trigger a redirect
  await page.getByRole('link', { name: 'here' }).click();

  // Click the "here" link again on the redirected page
  await page.getByRole('link', { name: 'here' }).click();

  // Navigate back to the original redirector page
  await page.goto('https://the-internet.herokuapp.com/redirector');

  // Reload the page to ensure it's refreshed
  await page.reload();

  // Assert that the current URL is still the redirector page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/redirector');
});
