const { test } = require('@playwright/test');

test('Navigate to multiple sites and print titles', async ({ page }) => {
  // 1. Navigate to https://playwright.dev
  await page.goto('https://playwright.dev');
  const title1 = await page.title();
  console.log('Playwright Title:', title1);

  // 2. Navigate to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');
  const title2 = await page.title();
  console.log('Wikipedia Title:', title2);

  // 3. Navigate to https://www.google.com
  await page.goto('https://www.google.com');
  const title3 = await page.title();
  console.log('Google Title:', title3);
});