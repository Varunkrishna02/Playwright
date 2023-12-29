import { test,expect } from "@playwright/test";

test("MergeContact", async({page,context}) => {

    test.setTimeout(120000);
   
    await page.goto("http://leaftaps.com/opentaps/control/main");    
    await page.getByLabel('Username').fill("Demosalesmanager");   
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.waitForLoadState('load');
    console.log(await page.getByText('CRM/SFA').innerText());
    await page.locator('text=CRM/SFA').click();
    await page.waitForLoadState('load');
    await page.locator("//a[text()='Contacts']").click();
    await page.waitForLoadState('load');
    await page.locator("//a[text()='Merge Contacts']").click();
    await page.waitForLoadState('load');
    
    //Promise & Handling From contact window
    const fromContactPromise = context.waitForEvent("page");

    await page.locator("img[alt='Lookup']").first().click();

    const fromContactWindow = await fromContactPromise;

    fromContactWindow.waitForEvent('load');
    fromContactWindow.locator("a[class='linktext']").first().click();
    //await fromContactWindow.waitForTimeout(5000);

    await expect(page.locator("#ComboBox_partyIdFrom")).not.toBeEmpty();
     
    //Promise & Handling To contact window

    const ToContactPromise = context.waitForEvent('page');

    await page.locator("img[alt='Lookup']").last().click();

    const tocontactWindow = await ToContactPromise;
    tocontactWindow.waitForEvent('load');
    tocontactWindow.locator("a[class='linktext']").nth(4).click();

    await expect(page.locator("#ComboBox_partyIdTo")).not.toBeEmpty();
    await page.waitForTimeout(5000);
   
    //Handling Alert after clicking Merge
    page.on('dialog', async dialog=>{

    const messageAlert = dialog.message();
    console.log(`Message alert is ${messageAlert}`);
    await dialog.accept();

    })
    await page.locator("//a[text()='Merge']").click();


    //Verifying Page Title
    await page.waitForLoadState('load');
    await expect(page).toHaveTitle("View Contact | opentaps CRM");

});













