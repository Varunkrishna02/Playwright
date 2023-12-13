/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/

//import { log } from "console";
import { expect, test } from "@playwright/test";

test("Create New Lead in Salesforce",async ({page}) => {

    test.setTimeout(120000);

//Launch Salesforce URL

    await page.goto("https://login.salesforce.com");

    //Enter Username and Password to Login
    
    await page.fill("#username", "balaji@testleaf.com");
    await page.fill("#password", "Baaji_99");

    await page.click("#Login");

    //Click Toggle Menu 

    await page.click(".slds-icon-waffle");

    //Click View All  

    await page.getByLabel("View All Applications").click();

    await page.waitForLoadState('domcontentloaded');

    //Click Sales button

    await page.click("p[title^='Manage customer']");

    await page.waitForLoadState('load');

    //Click Leads tab

    await page.getByRole('link', {name:'Leads'}).click();

    await page.waitForLoadState('domcontentloaded');

    //Click New button

    await page.click("button[class$='actionListButton']");

    await page.waitForLoadState('load');

    //Enter values 

    await page.click("button[name='salutation']");

    await page.getByTitle('Mr.').click();

    await page.getByPlaceholder("Last Name").fill("Thirumalai");

    await page.fill("input[name='Company']", "AZ");

    await page.click("button[name='SaveEdit']");

    await page.waitForLoadState('load');

    //Get Lead name
    const leadName = await page.locator('lightning-formatted-name').innerText();
    console.log(leadName);

    //Verify the Lead name
    expect(leadName).toBe('Mr. Thirumalai');

    
})