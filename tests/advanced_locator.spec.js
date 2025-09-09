import { test, expect } from '@playwright/test';

test('Advanced locators example', async ({ page }) => {
  await page.goto('https://github.com/search');
  const searchInput = page.locator('header >> input[type="text"]');
  //await searchInput.type('text=playwright');
  await page.keyboard.press('Enter');
  await page.waitForSelector('.repo-list-item');
  const repoWithDescription = await page.$$('.repo-list-item:has(p)');
  console.log(`Found ${repoWithDescription.length} repos with descriptions`);
});
