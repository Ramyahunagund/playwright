const { test, expect } = require('@playwright/test');

test('Check Google homepage URL', async ({ page }) => {
  // 1. Navigate to the Google homepage
  await page.goto('https://www.google.com');

  // 2. Assert that the URL is https://www.google.com/
  await expect(page).toHaveURL('https://www.google.com/');

  // 3. Print a success message to the console
  console.log('Successfully navigated to Google homepage!');
});