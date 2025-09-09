import {test,expect} from '@playwright/test'

test('Validate page title and URL', async({page}) => {

    await page.goto('https://www.hollandandbarrett.com/');

    //actual values
    const actualTitle = await page.title();
    console.log(actualTitle);

    const actualURL = page.url();
    console.log(actualURL);

    //expected values
    const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store";
    const expectedURL = 'https://www.hollandandbarrett.com/';

    //Assertions
    expect(actualTitle).toBe(expectedTitle);
    expect(actualURL).toBe(expectedURL);
})