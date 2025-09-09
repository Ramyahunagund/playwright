const { test, expect } = require('@playwright/test');

test('Navigate to Herokuapp and verify title and URL', async ({ page }) => {
  // 1. Navigate to the Internet Herokuapp page
  await page.goto('https://the-internet.herokuapp.com/');

  // 2. Assert that the title is "The Internet"
  await expect(page).toHaveTitle('The Internet');

  // 3. Verify the final URL did not change
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  console.log('Successfully landed on the correct page without redirection.');
});