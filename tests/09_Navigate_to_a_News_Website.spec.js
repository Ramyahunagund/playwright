const { test, expect } = require('@playwright/test');

test('BBC News homepage title and URL check', async ({ page }) => {
  await page.goto('https://www.bbc.com/news');

  await expect(page).toHaveURL('https://www.bbc.com/news');

  const title = await page.title();
  console.log('BBC News Title:', title);
});