import { test } from "@playwright/test";
import { link } from "fs";

test("createLead in SalesforceApp", async({page}) =>{

    test.setTimeout(120000);

    await page.goto("https://login.salesforce.com");

    await page.locator('#username').fill("varunkrishna@testleaf.com");

    await page.locator('[name="pw"]').type("Kudipilo0210!");

    await page.locator('#Login').click();

    await page.waitForLoadState('load');

    await page.locator('.slds-icon-waffle').click();
     
    await page.waitForLoadState('load');

    await page.getByLabel('View All Applications').click();

    //await page.getByText('View All').click();

    await page.waitForLoadState('load');

    await page.locator('[title="Manage your sales process with accounts, leads, opportunities, and more"]').click();

    await page.waitForLoadState('load');
    await page.waitForLoadState('load');

    await page.getByRole('link', {name:'Leads'}).click();

    await page.waitForLoadState('load');

    await page.locator('.slds-button.slds-button_neutral.middleButton.actionListButton').click();

    //await page.click("button[class$='actionListButton']");
    
    await page.waitForLoadState('load');
    //await page.waitForLoadState('domcontentloaded');

    await page.locator('[name="salutation"]').click();

    await page.getByTitle('Mr.').click();

    await page.locator('[name="lastName"]').fill("Varun");

    await page.locator('input[name="Company"]').fill("AZ");

   // await page.locator('[name="SaveEdit"]').click();
    await page.click("button[name='SaveEdit']");

    await page.waitForLoadState('load');
    //await page.waitForLoadState('domcontentloaded');

    const leadName = await page.locator('lightning-formatted-name').innerText();
    console.log(leadName);

    await page.waitForTimeout(10000);


});