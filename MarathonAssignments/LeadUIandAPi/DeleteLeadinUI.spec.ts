import { test, expect } from "@playwright/test";
import { getSalesforceAccessToken } from "../DashboardUIandAPI/OtherMethod/getAuthAPI.spec";
import { createLeads } from "./createLeadAPI.spec"; 
import { updateLeads } from "./updateLeadAPI.spec";

import {request} from "http"

let access_token: any;
let inst_url: any;
let leadID : any;
let lName: any;
let fname: any;

test ("getAccessTokenAPI", async()=>{

    const authData = await getSalesforceAccessToken();
    access_token = authData.access_token;
    inst_url = authData.inst_url;

})

test("create Lead API", async()=>{

    const leadData = await createLeads();
    leadID = leadData.leadID;
    lName = leadData.lName;
   
}) 

test("Update leadInfo", async()=>{

    const updateLead = await updateLeads();
})

test("deleteLead in UI",async({page}) => {

    test.setTimeout(120000);
 
    //Enter the Username, Password and click on the Login button. 

    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill("varunkrishna@testleaf.com");
    await page.locator('[name="pw"]').type("Kudipilo0210!");
    await page.locator('#Login').click();
    await page.waitForLoadState('load');

    //Navigate to Leads Page
    await page.locator('.slds-icon-waffle').click();     
    await page.waitForLoadState('load');
    await page.getByLabel('View All Applications').click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    await page.locator("div[type='search']").type("Leads");
    await page.waitForLoadState('load')
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load')  
    await page.locator("p[class='slds-truncate']").filter({hasText: 'Leads'}).click();
    await page.waitForLoadState('load')
    await page.waitForTimeout(5000);

    //Verify the Leads created in API
    await page.locator("[placeholder='Search this list...']").type("leaf ApiTesting1");
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load')
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    const createdLeadinAPI = page.locator("[data-refid='recordId']");
    const nameofLead = await createdLeadinAPI.innerText();
    expect(nameofLead).toContain("ApiTesting1");

    
    //Delete the Lead Created
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Show Actions' }).click();

    //await page.locator("a[title='Show 3 more actions']").click();
    await page.waitForLoadState('load');
    await page.locator("a[title='Delete']").click();
    await page.waitForLoadState('load');
    await page.locator("button[title='Delete']").click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(10000);
    await expect(page.getByText('No items to display.')).toBeVisible();

})