import { expect,test } from "@playwright/test";

test("Verify Lead Creation and Conversion to Opportunity", async({page})=>{
    
    test.setTimeout(120000);
    let oppName = "VarunOpp"
    let lastName = "Testing12"

    //Enter the Username, Password and click on the Login button. 

    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill("varunkrishna@testleaf.com");
    await page.locator('[name="pw"]').type("Kudipilo0210!");
    await page.locator('#Login').click();
    await page.waitForLoadState('load');

    //Navigate to Marketing Page
    await page.locator('.slds-icon-waffle').click();     
    await page.waitForLoadState('load');
    await page.getByLabel('View All Applications').click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    await page.locator("div[type='search']").type("Marketing");
    await page.waitForLoadState('load')
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load')
    await page.locator("[title='Best-in-class on-demand marketing automation']").click();
    await page.waitForLoadState('load');    

    //Create Lead & Verify 
    await page.waitForLoadState('load'); 
    await page.getByRole('link', {name:'Leads'}).click();
    await page.waitForLoadState('load');
    await page.locator('.slds-button.slds-button_neutral.middleButton.actionListButton').click();
    await page.waitForLoadState('load');  
    await page.locator('[name="salutation"]').click();
    await page.getByTitle('Mr.').click();
    await page.locator('[name="lastName"]').fill(lastName);
    await page.locator('input[name="Company"]').fill("AZ");
    await page.click("button[name='SaveEdit']");
    await page.waitForLoadState('load');
    
    const leadName = await page.locator('lightning-formatted-name').innerText();
    console.log(leadName);
    await page.waitForLoadState('load');
    
   
    //Select the submit for Approval dropdown & Click Convert
    await page.locator("button[class='slds-button slds-button_icon-border-filled']").click();
    await page.waitForLoadState('load');
    await page.getByRole('menuitem', {name:'Convert'}).click();
    await page.waitForLoadState('load');
    await page.locator("button[class='slds-button transparentButton']").nth(2).click()
    await page.waitForLoadState('load');
    await page.locator("input[class=' input']").nth(3).fill(oppName);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load');
    await page.locator("[class='slds-button slds-button_brand']").click();
    await page.waitForLoadState('load');

    //Verify SuccessMessage
    await expect(page.getByText("Your lead has been converted")).toBeVisible({timeout: 10000});
    await page.getByText("Go to Leads").click();    
    await page.waitForLoadState('load');

    //Navigate to Oppty & verify Oppty
    await page.getByRole('link', {name:'Opportunities'}).click();
    await page.waitForLoadState('load');
    await page.locator("[name='Opportunity-search-input']").fill(oppName);
    await page.keyboard.press('Enter');
    await expect(page.locator("[title='VarunOpp']")).toBeVisible({timeout: 10000});
    await page.waitForLoadState('load');
 
});