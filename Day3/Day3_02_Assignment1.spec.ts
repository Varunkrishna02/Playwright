import { chromium, test } from "@playwright/test";

test("To Launch Browser HomeAssignment",async() => {
     
    const browser = await chromium.launch({headless: false });

    const browserContext = await browser.newContext();

    const browserPage = await browserContext.newPage();

    await browserPage.goto("https://login.salesforce.com");

    await browserPage.locator('#username').fill("varunkrishna@testleaf.com");

    await browserPage.locator('[name="pw"]').type("Kudipilo0210!");

    await browserPage.locator('#Login').click();

    await browserPage.waitForTimeout(10000);
    
    const pageTitle = await browserPage.title();
    console.log(`The title of Page is ${pageTitle}`);

    const pageUrl = browserPage.url();
    console.log(`The title of pageURL is ${pageUrl}`);

    
});
