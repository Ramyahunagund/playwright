const { test, expect } = require('@playwright/test');

test('Navigate to Playwright Python docs and verify title and URL', async ({ page }) => {
  // 1. Navigate directly to the Python documentation page
  await page.goto('https://playwright.dev/python/docs/intro');

  // 2. Assert that the title contains "Playwright Python"
  await expect(page).toHaveTitle(/Playwright Python/);

  // 3. Verify that the URL includes "/python/docs/intro"
  await expect(page).toHaveURL(/\/python\/docs\/intro/);

  console.log('Title and URL verified successfully!');
});