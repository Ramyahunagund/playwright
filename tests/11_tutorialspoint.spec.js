import { test, expect } from '@playwright/test';    

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name:' }).fill('R');
  await page.getByRole('textbox', { name: 'Name:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name:' }).fill('Ramya');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('ramyahunagund307@gmail.com');
});