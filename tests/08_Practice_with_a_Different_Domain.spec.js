const { test, expect } = require('@playwright/test');

test('GitHub homepage title and URL check', async ({ page }) => {
  // 1. Navigate to the GitHub homepage
  await page.goto('https://github.com/');

  // 2. Print the title and URL to the console
  const title = await page.title();
  const url = page.url();
  console.log('Title:', title);
  console.log('URL:', url);

  // 3. Assert that the title is exactly as expected
  await expect(page).toHaveTitle("GitHub: Let’s build from here · GitHub");
});