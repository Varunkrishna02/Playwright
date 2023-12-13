/*
# Classroom - 3 (Dropdown)

1. Use fixture to launch the browser
2. Load the URL http://leaftaps.com/opentaps/control/main
3. Enter the username
4. Enter the password
5. Click Login button
6. Click 'CRM/SFA' link.
7. Click Leads 
8. Click Create Leads
9. Enter all the madatory fields
10. Choose 'Direct Mail' from the Source dropdown using option
11. Choose 'Computer Software' from the Industry dropdown using value
12. Choose 'Partnership' from the Ownership dropdown using index
*/

import { test } from "@playwright/test";

test("ClassroomAssignment on Dropdown",async ({page})=>{

      await page.goto("http://leaftaps.com/opentaps/control/main");
   
      await page.getByLabel('Username').fill("Demosalesmanager");
   
      await page.locator('#password').fill('crmsfa');
   
      await page.locator('.decorativeSubmit').click();
   
      //await page.waitForTimeout(10000);
   
      console.log(await page.getByText('CRM/SFA').innerText());
   
      await page.locator('text=CRM/SFA').click();
   
      await page.waitForTimeout(5000);await page.locator('text=Leads').nth(0).click();

      await page.locator('text=Create Lead').nth(0).click();
   
      await page.locator('#createLeadForm_companyName').type("TeestingLeaf");
   
      await page.locator('#createLeadForm_firstName').type("test");
   
      await page.locator('#createLeadForm_lastName').type("leaf");

      //page.locator('#createLeadForm_industryEnumId').;

      await page.selectOption("#createLeadForm_dataSourceId", {value: 'LEAD_DIRECTMAIL'});

      //await page.selectOption("#createLeadForm_dataSourceId", {value: 'LEAD_COLDCALL'});

      await page.selectOption("#createLeadForm_industryEnumId",{value: 'IND_SOFTWARE'});

      await page.selectOption("#createLeadForm_ownershipEnumId", {value:'OWN_PARTNERSHIP'});
      //Computer Software
      //Partnership

      await page.waitForTimeout(8000);

});