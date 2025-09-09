import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');
  await page.locator('.containerSubheader > li:nth-child(3)').click();
  await page.getByRole('link', { name: 'C Programming Language' }).click();
  await page.goBack('https://www.geeksforgeeks.org/');
  await page.reload();
});