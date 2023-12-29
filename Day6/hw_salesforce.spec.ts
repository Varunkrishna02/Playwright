import { expect, test } from "@playwright/test";

test("Verify AccountName", async({page}) =>{

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

    await page.locator('[title="Manage your sales process with accounts, leads, opportunities, and more"]').click();

    await page.waitForLoadState('load');
    
    await page.locator("[title='Accounts']").click();

    await page.waitForLoadState('load');

    await page.locator("a[title='New']").click();

    await page.waitForLoadState('load');
    
    await page.locator("[name='Name']").fill("Varuntestleaf");

    await page.locator("[name='SaveEdit']").click();

    await page.waitForLoadState('load');
    await page.waitForLoadState('load');

    //await  page.waitForTimeout(10000);
    
    await expect(page.locator(".custom-truncate").filter({hasText: "Varuntestleaf"})).toBeVisible();

    await page.waitForLoadState('load');
    
})