import { test, expect } from '@playwright/test';

// Define a test case
test('test', async ({ page }) => {
  // Navigate to the TodoMVC demo app
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Add the first todo item: "buy groceries"
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('buy groceries');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Add the second todo item: "walk the dog"
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('walk the dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Add the third todo item: "finish homework"
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('finish homework');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Count the number of visible todo items
  const visibleTodos = await page.locator('.todo-list li:visible').count();

  // Assert that there are exactly 3 visible todo items
  await expect(visibleTodos).toBe(3);

  // Click on the "Completed" filter to view completed tasks
  await page.getByRole('link', { name: 'Completed' }).click();

  // Assert that there are no completed tasks displayed
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});
