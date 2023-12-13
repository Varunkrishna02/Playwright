import { chromium, test } from "@playwright/test";
import { channel } from "diagnostics_channel";

test("testLeafBrowserAssignment",async() => {

   const launchBrowser = await chromium.launch({headless: false , channel: 'chrome'});

   const newbrowserContext =await launchBrowser.newContext();

   const page = await newbrowserContext.newPage(); 

   await page.goto("http://leaftaps.com/opentaps/control/main");

   //await page.locator('#username').fill("Demosalesmanager");

   await page.getByLabel('Username').fill("Demosalesmanager");

   await page.locator('#password').fill('crmsfa');

   await page.locator('.decorativeSubmit').click();

   //await page.waitForTimeout(10000);

   console.log(await page.getByText('CRM/SFA').innerText());

   await page.locator('text=CRM/SFA').click();

   await page.waitForTimeout(5000);

   await page.locator('text=Leads').nth(0).click();

   await page.locator('text=Create Lead').nth(0).click();

   await page.locator('#createLeadForm_companyName').type("TeestingLeaf");

   await page.locator('#createLeadForm_firstName').type("test");

   await page.locator('#createLeadForm_lastName').type("leaf");

   //-------------------Handling Dropdown --------------------------------//

   await page.selectOption("#createLeadForm_dataSourceId", {value: 'LEAD_COLDCALL'});

   const sourceOptions = page.locator('#createLeadForm_dataSourceId option');
   const optionCount = await sourceOptions.count();
   console.log(`The OptionCount is ${optionCount}`); 
     
   for (let index = 0; index < optionCount; index++) {
   
    console.log(await sourceOptions.nth(index).innerText());
    
   }
   //--------------------------------------------------------------------//
   
   await page.waitForTimeout(8000);

   //await page.locator('[name="submitButton"]').click();
   await page.locator('input[type=submit]').click();

   const pageURL = page.url();
   //console.log(pageURL);
   console.log(`The title of Page is ${pageURL}`); 

   //await page.waitForTimeout(15000);

   await page.waitForLoadState('load'); // to load page fully 

   const pageTitle = await page.title();
   console.log(`The title of Page is ${pageTitle}`); 

   await page.waitForLoadState('load');
   const leadStatus = await page.locator('#viewLead_statusId_sp').innerText();

   if (leadStatus==="Assigned") {

    console.log("Lead is Created");
    
   } else {
    
    console.log("Lead is not Created");
   }

});