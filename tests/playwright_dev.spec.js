import {test,expect} from '@playwright/test'

test('validate title and url', async({page})=>{
    await page.goto('https://playwright.dev/');

    //actual values
    const actualTitle2 = await page.title();
    const actualURL2 = page.url();

    //expected values
    const expectedTitle2 = "Fast and reliable end-to-end testing for modern web apps | Playwright";
    const expectedURL2 = 'https://playwright.dev/';

    //Assertion
    expect(actualTitle2).toBe(expectedTitle2);
    expect(actualURL2).toBe(expectedURL2);

})