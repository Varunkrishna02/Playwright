import { expect,test } from "@playwright/test";

import { getSalesforceAccessToken } from "./getAuthAPI.spec";

import {getDashboards} from "./getDashboardsAPI.spec"

import { deleteDashboards } from "./DeleteDashboard.spec";


let accessToken: any;
let inst_url: any;
let dbID : any;

test("dashboardUIandAPI", async({page})=>{
    
    test.setTimeout(120000);
 
    //Enter the Username, Password and click on the Login button. 

    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill("varunkrishna@testleaf.com");
    await page.locator('[name="pw"]').type("Kudipilo0210!");
    await page.locator('#Login').click();
    await page.waitForLoadState('load');

    //Navigate to Dashboards4 Page
    await page.locator('.slds-icon-waffle').click();     
    await page.waitForLoadState('load');
    await page.getByLabel('View All Applications').click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    await page.locator("div[type='search']").type("Dashboards");
    await page.waitForLoadState('load')
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load')  
    await page.locator("p[class='slds-truncate']").filter({hasText: 'Dashboards'}).click();
    await page.waitForLoadState('load')

   
    //Create Dashboard
    await page.locator("div[title='New Dashboard']").click();
    await page.waitForLoadState('load')

    const framelocator = page.frameLocator("[title='dashboard']").last();
    await framelocator.locator('#dashboardNameInput').type("CreateDashboard1");
    await framelocator.locator('#submitBtn').click();
    await page.waitForLoadState('load')

    //Navigating to frame
    const DashboardFrame =  page.frameLocator("[title='dashboard']").last();
    const dashboardName =await DashboardFrame.locator("div[class='slds-form-element__control slds-has-divider_bottom']").innerText();
    expect(dashboardName).toContain("CreateDashboard1");
    await page.waitForLoadState('load')
    DashboardFrame.locator("button[class='slds-button slds-button_neutral save']").click()
    await page.waitForLoadState('load')
    await page.waitForTimeout(8000);
 
}); 


test("getAccessTokenfrom Authhelper", async()=>{


   const authCode =  await getSalesforceAccessToken();
   accessToken = authCode.access_token;
   inst_url = authCode.inst_url;

})



test("getDashboardsinSalesforce",async() =>{

   const Dashboard = await getDashboards();
   dbID = Dashboard.dbID;
   
}) 

test("deleteDashboards", async()=>{
    
   const deletedashBoard = await deleteDashboards();
   
})




