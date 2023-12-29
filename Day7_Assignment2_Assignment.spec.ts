import { expect,test } from "@playwright/test";

test("FrameAssignment",async({page,context})=>{

    test.setTimeout(120000);

    //Create a promise in code that there will be new page 
    const windowPromise = context.waitForEvent("page");

    //Perform a useraction which is supposed to open a new Window
    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill("varunkrishna@testleaf.com");
    await page.locator('[name="pw"]').type("Kudipilo0210!");
    await page.locator('#Login').click();
    await page.waitForLoadState('load');
    
    await page.locator("button[title='Learn More']").click();
    //Now wait for promise to get completed.
    const window = await windowPromise;
        
    //Switch to new window for performing actions further
    await window.locator("button[onclick='goAhead()']").click();
    await page.waitForTimeout(5000);
    await expect(window).toHaveURL("https://www.salesforce.com/products/platform/products/mysalesforce/");
    const pageTitle = await window.title();
    console.log(pageTitle);
    await page.waitForTimeout(5000);
    window.close();
}) 

