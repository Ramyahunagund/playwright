import { test, expect } from '@playwright/test';

// Define a test case to navigate GitHub and search for a repository
test('Navigate GitHub and search for a repository', async ({ page }) => {
  // Step 1: Go to GitHub homepage
  await page.goto('https://github.com/');

  // Step 2: Click on the 'Sign up' link
  await page.getByRole('link', { name: 'Sign up' }).click();

  // Step 3: Navigate back to GitHub homepage
  await page.goto('https://github.com/');

  // Step 4: Click on the 'Sign in' link
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Step 5: Navigate back to GitHub homepage again
  await page.goto('https://github.com/');

  // Step 6: Click on the search button labeled 'Search or jump to…'
  await page.getByRole('button', { name: 'Search or jump to…' }).click();

  // Step 7: Fill the search box with the term 'repository'
  await page.getByRole('combobox', { name: 'Search' }).fill('repository');

  // Step 8: Press 'Enter' to initiate the search
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

  // Step 9: Click on the link for the repository named 'hassio-addons/repository'
  await page.getByRole('link', { name: 'hassio-addons/repository' }).click();
});
