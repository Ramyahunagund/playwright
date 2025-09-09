import {test,expect} from '@playwright/test'

test('validate title and url', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    //actual values
    const actualTitle1 = await page.title();
    const actualURL1 = page.url();

    //expected values
    const expectedTitle1 = "Test Login | Practice Test Automation";
    const expectedURL1 = 'https://practicetestautomation.com/practice-test-login/';

    //Assertion
    expect(actualTitle1).toBe(expectedTitle1);
    expect(actualURL1).toBe(expectedURL1);

})