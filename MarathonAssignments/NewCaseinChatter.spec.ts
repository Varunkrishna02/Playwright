import {expect, test } from "@playwright/test";

test("Create and verify a New Case in Chatter",async({page})=>{

    test.setTimeout(120000);
    let oppName = "VarunOpp"
    let lastName = "Testing12"

    //Enter the Username, Password and click on the Login button. 
    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill("varunkrishna@testleaf.com");
    await page.locator('[name="pw"]').type("Kudipilo0210!");
    await page.locator('#Login').click();
    await page.waitForLoadState('load');

    //Navigate to Services Page
    await page.locator('.slds-icon-waffle').click();     
    await page.waitForLoadState('load');
    await page.getByLabel('View All Applications').click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    await page.locator("div[type='search']").type("Service");
    await page.waitForLoadState('load')
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load')
    await page.locator("[title='Manage customer service with accounts, contacts, cases, and more']").click();
    await page.waitForLoadState('load'); 
    
    //Navigate to Cases
    await page.waitForLoadState('load'); 
    await page.getByRole('link', {name:'Cases'}).click();
    await page.waitForLoadState('load'); 
    await page.locator("div[title='New']").click();
    await page.waitForLoadState('load'); 

    //Create Contact in Cases Page
    await page.getByPlaceholder("Search Contacts...").click(); //placeholder="Search Contacts..."
    await page.waitForLoadState('load'); 
    await page.locator('lightning-base-combobox-item[data-value="actionCreateNew"]').click();
    await page.waitForLoadState('load');
    await page.locator('.salutation a').click();
    await page.getByTitle('Mr.').click();
    await page.getByPlaceholder("First Name").type("testingleaf");
    await page.getByPlaceholder("Last Name").type("Againleaf");
    await page.waitForLoadState('load');
    await page.locator("button[title='Save']").click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    
    //Create Account in Cases Page
    await page.locator("input[placeholder='Search Accounts...']").click();
    await page.waitForLoadState('load');
    await page.locator('span[title="New Account"]').click();
    await page.waitForLoadState('load');
    await page.locator('input[class=" input"]').first().fill("Testing Limited");
    await page.locator('input[class=" input"]').nth(3).fill("001");
    await page.locator("a[class='select']").first().click();
    await page.locator('[title="Hot"]').click();
    await page.locator("button[title='Save']").click();

    //Add Status & Case in Cases
    await page.waitForLoadState('load');
    await page.locator("[aria-label='Status, New']").click();
    await page.locator("span[title='New']").click();
    await page.waitForLoadState('load');
    await page.locator("[aria-label='Case Origin, --None--']").click();
    await page.waitForLoadState('load');
    await page.locator("span[title='Email']").click();
    await page.waitForLoadState('load');
    await page.locator("[name='SaveEdit']").click();
    await page.waitForLoadState('load');

    //Edit and Update Cases    
    await page.locator("button[name='Edit']").click();
    await page.waitForLoadState('load');
    await page.locator("button[data-value='New']").click();
    await page.waitForLoadState('load');
    await page.locator("[data-value='Escalated']").click();
    await page.waitForLoadState('load');
    await page.locator("[name='SaveEdit']").click();
    await page.waitForLoadState('load');

    //Share a Update & verify
    const StatusUpdate = page.locator('.fieldComponent.slds-text-body--regular.slds-show_inline-block.slds-truncate').filter({hasText: "Escalated"});
    await expect(StatusUpdate).toBeVisible({timeout: 10000});
    await page.waitForTimeout(5000);
    await page.locator("[title='Share an update...']").click();
    await page.waitForLoadState('load');
    await page.locator(".ql-editor.ql-blank.slds-rich-text-area__content.slds-text-color_weak.slds-grow").fill("Testing Update");
    await expect(page.locator("button[title='Click, or press Ctrl+Enter']")).toBeEnabled({timeout: 10000});
    await page.locator("button[title='Click, or press Ctrl+Enter']").click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(8000);
    const TextBoxMessage = await page.locator(".cuf-feedElement.cuf-feedItem").first().innerText();
    console.log(TextBoxMessage);
    expect(TextBoxMessage).toContain("Testing Update");
    await page.waitForTimeout(5000);

    //Like the chatter 
    await page.locator(".slds-button.slds-button_icon-border.slds-button_icon-x-small").first().click();
    await page.locator("[title='Like on Chatter']").click();
    await page.waitForLoadState('load');    

    const successMessage = await page.locator("[class= 'slds-theme--success slds-notify--toast slds-notify slds-notify--toast forceToastMessage']").innerText();
    expect(successMessage).toContain("Post was liked.");
  
})