import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  // Get the name of the browser from the test project
  const browserName = testInfo.project.name;

  // Navigate to the target page
  await page.goto('https://httpbin.org/html');

  // Interact with elements on the page
  await page.getByRole('heading', { name: 'Herman Melville - Moby-Dick' }).click();
  await page.getByText('Availing himself of the mild').click();

  // Locate the paragraph element
  const paragraph = page.locator('p');

  // Optional assertion (uncomment if needed)
  // await expect(paragraph).toContainText('The novel details the experiences of');

  // Browser-specific logic
  if (browserName === 'chromium') {
    console.log('Running on Chromium');
  } else if (browserName === 'firefox') {
    console.log('Running on Firefox');
  } else if (browserName === 'webkit') {
    console.log('Running on WebKit');
  }

  // Take a screenshot with browser-specific filename
  await page.screenshot({ path: `screenshot-${browserName}.png` });

  // Verify the page title
  await expect(page).toHaveTitle('Herman Melville - Moby-Dick');
});
