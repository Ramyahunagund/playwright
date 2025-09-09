const { test, expect } = require('@playwright/test');

test('Node.js homepage title and URL check', async ({ page }) => {
  await page.goto('https://nodejs.org/');

  await expect(page).toHaveTitle(/Node\.js/);
  await expect(page).toHaveURL('https://nodejs.org/');

  console.log('All assertions passed for Node.js!');
});