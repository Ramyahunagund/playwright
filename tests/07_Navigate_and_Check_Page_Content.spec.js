const { test, expect } = require('@playwright/test');

test('Check visible text on Herokuapp homepage', async ({ page }) => {
  // 1. Navigate to the Internet Herokuapp page
  await page.goto('https://the-internet.herokuapp.com/');

  // 2. Assert that the text "Welcome to the-internet" is visible somewhere on the page
  await expect(page.locator('body')).toContainText('Welcome to the-internet');

  console.log('Text "Welcome to the-internet" is visible on the page.');
});