import { test } from "@playwright/test";

test("alerts", async({page}) =>{ 
    
    test.setTimeout(120000);

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    await page.waitForLoadState('load');

    //Navigating to iframe

    const jsConfirmPage = page.frameLocator('#iframeResult');

    await page.waitForTimeout(12000);

    page.on('dialog', async dialog =>{

        const messgaeAlert = dialog.message();
        console.log(`Messag is ${messgaeAlert}`);
        await dialog.accept();

    })

    //Clicking Button
    await jsConfirmPage.getByText("Try it").click();

    const TextMessage = await jsConfirmPage.locator('#demo').innerText();
    console.log(TextMessage);
    
})