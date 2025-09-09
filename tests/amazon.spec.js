import { test, expect } from '@playwright/test';

// Define a test case to search for an iPhone on Amazon and add it to the list
test('Search and add iPhone to list on Amazon', async ({ page }) => {
  // Step 1: Navigate to Amazon homepage
  await page.goto('https://www.amazon.com/');

  // Step 2: Click on the search textbox
  await page.getByRole('textbox', { name: 'Search For' }).click();

  // Step 3: Enter 'iphone' into the search textbox
  await page.getByRole('textbox', { name: 'Search For' }).fill('iphone');

  // Step 4: Click the 'Go' button to perform the search
  await page.getByRole('button', { name: 'Go' }).click();

  // Step 5: Click on the link for 'Apple iPhone 12, 64GB, Black'
  await page.getByRole('link', { name: 'Apple iPhone 12, 64GB, Black' }).click();

  // Step 6: Navigate directly to the product detail page
  await page.goto('https://www.amazon.com/Apple-iPhone-12-64GB-Black/dp/B08PP5MSVB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.8P_9rFI4JAfZg5AxKaMKGYX9Eky9G1XBbhWlDDEx5NagYUm2ga1pqnPcZ4lw5RPiabxHpqkNzPF6kHAj42FVF5giGLSXNKXAKprDcQOb-9Zp8AWyCStelNX-ZbuOrCGLGjKocESamgwWEwo9EsABbWpEIWjpVqHvHVENiBpXGao8lmz9rd80QrFIBSMr9nUZYE04ZfvuEJDJVcyU3mAa95oUw-b9e7U-w-AxVPNXiEo.dqpsF9Evdy6WhH6iIstYTo3UoijADmuSbk5kFe_3TGU&dib_tag=se&keywords=iphone&qid=1756882213&sr=8-1&th=1');

  // Step 7: Click on the 'Add to List' link to add the product to the user's list
  await page.getByRole('link', { name: 'Add to List' }).click();
});