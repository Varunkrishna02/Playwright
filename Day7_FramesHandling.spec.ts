import { test } from "@playwright/test";

test("FrameHandling using frameObbject", async({page})=>{

    test.setTimeout(120000);
    await page.goto("https://leafground.com/frame.xhtml");
    
    const frame= page.frame({url: 'https://leafground.com/default.xhtml'})
    //console.log(frame);

    await frame?.waitForSelector("#Click");
    await frame?.locator("#Click").first().click();
    await page.waitForTimeout(5000);

    const frameCount = page.frames();
    console.log(`No of frames in Page is ${frameCount.length}`)
 
})

test.only("FrameHandling using frameLocator", async({page})=>{

    test.setTimeout(120000);
    await page.goto("https://leafground.com/frame.xhtml");
    
    const framelocator = page.frameLocator('iframe').first();
    await framelocator.locator("#Click").first().click();
    await page.waitForTimeout(5000);

    const cardSelector = page.locator(".card").filter({hasText: ' Click Me (Inside Nested frame)'});
    const firstIframe = cardSelector.frameLocator('iframe');
    await firstIframe.frameLocator('iframe').locator("#Click").click();
    await page.waitForTimeout(5000);
   
    
})