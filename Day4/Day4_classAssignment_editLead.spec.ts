import { test } from "@playwright/test";

test("EditLead", async({page}) => {

    test.setTimeout(120000);
   
    await page.goto("http://leaftaps.com/opentaps/control/main");

    
    await page.getByLabel('Username').fill("Demosalesmanager");
   
    await page.locator('#password').fill('crmsfa');
 
    await page.locator('.decorativeSubmit').click();

    await page.waitForLoadState('load');

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

    await page.locator('input[type=submit]').click();

    const pageURL = page.url();
    //console.log(pageURL);
    console.log(`The title of Page is ${pageURL}`); 
 
    //await page.waitForTimeout(15000);
 
    await page.waitForLoadState('load'); // to load page fully 
 
    const pageTitle = await page.title();
    console.log(`The title of Page is ${pageTitle}`); 

    await page.getByRole('link', {name: 'Edit'}).click();

    await page.locator('#updateLeadForm_companyName').clear();

    await page.locator('#updateLeadForm_companyName').fill("EditName");

    await page.locator("input[value='Update']").click();

    await page.waitForLoadState('load');

    const editedName = await page.locator('#viewLead_companyName_sp').innerText();
    console.log(`The EditedLead is ${editedName}`);

    //
    //await page.getByRole('link', {name : 'Edit'}).click();
 
});