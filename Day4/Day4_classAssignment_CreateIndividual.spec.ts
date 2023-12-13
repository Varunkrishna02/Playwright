import { expect, test } from "@playwright/test";

test("createIndividual",async({page}) => {

    test.setTimeout(120000);

    await page.goto("https://login.salesforce.com");

    await page.locator('#username').fill("varunkrishna@testleaf.com");

    await page.locator('[name="pw"]').type("Kudipilo0210!");

    await page.locator('#Login').click();

    await page.waitForLoadState('load');

    await page.locator('.slds-icon-waffle').click();

    await page.waitForLoadState('load');

    await page.getByLabel('View All Applications').click();

    await page.waitForLoadState('load');

    await page.getByRole('link', { name: 'Individuals'}).click();

    await page.waitForLoadState('load');

    //await page.getByRole('link', {name: 'New'}).click();

    await page.getByText('New').click();    

    await page.waitForLoadState('load');

    //const salutation = await page.locator('.salutation.compoundTLRadius.compoundTRRadius.compoundBorderBottom.form-element__row.uiMenu').click();
    
    //await page.waitForLoadState('load');
    
    //await page.locator("div[class$='salutation']").click()
    await page.locator('.salutation a').click();
    
    await page.getByTitle('Mr.').click();

    await page.waitForLoadState('load');

    await page.getByPlaceholder('Last Name').fill("testingMan");

    await page.waitForLoadState('load');

    //await page.locator('//button[@title="Save"]').click();

    await page.locator('//button[@title="Save"]').click();

    await page.waitForLoadState('load');

    await expect(page.getByText('Mr.  testingMan')).toBeVisible();


    
});