import { test,expect } from "@playwright/test";

test("MergeContact", async({page,context}) => {

    test.setTimeout(120000);
    
    //Login to SNOW
    await page.goto("https://dev187606.service-now.com/");    
    await page.locator('#user_name').fill("admin");   
    await page.locator('#user_password').fill("b!SKj-U4kj1Z");
    await page.locator('#sysverb_login').click();
    await page.waitForLoadState('load');

    //Navigate to Service Catalog -- Handle iFrames
    await page.getByRole("button", {name: 'All'}).click();
    await page.getByPlaceholder("Filter").fill("Service Catalog");
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
    await page.keyboard.press("Enter");
    await page.waitForLoadState('load');
    const mobFrameLocator = page.frameLocator('iframe').first();
    await mobFrameLocator.locator("a[aria-label='Mobiles. Cell phones to meet your business needs.']").click();
    await page.waitForTimeout(3000);

    //Select iphone and Handle iFrames
    await page.waitForLoadState('load');
    const selectMobileFrame = page.frameLocator('#gsft_main').first();
    await selectMobileFrame.getByRole('link', { name: 'Apple iPhone 13 pro', exact: true }).click();
    await page.waitForTimeout(3000);
    
    //Select Values and Order
    const mobdetailsFrame = page.frameLocator('#gsft_main').first();
    await mobdetailsFrame.locator("[class='radio-label']").filter({hasText: 'Yes'}).click();
    await mobdetailsFrame.locator("[class='cat_item_option sc-content-pad form-control']").type("7531596428");
    await mobdetailsFrame.locator("[class='form-control cat_item_option ']").selectOption("unlimited");
    await mobdetailsFrame.locator("[class='radio-label']").filter({hasText: 'Sierra Blue'}).click();
    await mobdetailsFrame.locator("[class='radio-label']").filter({hasText: '512 GB [add $300.00]'}).click();
    await page.waitForTimeout(3000);
    await mobdetailsFrame.locator("#oi_order_now_button").click();
    await page.waitForLoadState('load');

    //Validate the Success Message and Handle iFrames
    const successdetailsFrame = page.frameLocator('#gsft_main').first();
    const successMessage = await  successdetailsFrame.locator("[class='notification notification-success']").innerText();
    expect(successMessage).toContain("Thank you, your request has been submitted");
    await page.waitForTimeout(3000);

 
});













