import { expect,test } from "@playwright/test";
import { getSalesforceAccessToken } from "./generateAuthAPI.spec";

let accessToken: any;
let inst_url: any;
let DashboardID = null;

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
    DashboardFrame.locator("//button[text()='Save']").first().click()
    await page.waitForLoadState('load')
 
});

test("getAccessTokenfrom Authhelper", async()=>{


    const authCode =  await getSalesforceAccessToken();
    accessToken = authCode.access_token;
    inst_url = authCode.inst_url;
 
 })


 test("Get Dashboards", async({request})=>{

    let dashboardURL = `${inst_url}//services/data/v58.0/sobjects/Dashboard`;
    const dashboards = await request.get(dashboardURL,
        {
          headers:{
 
             "Authorization": `Bearer ${accessToken}`,
             "Connection": "keep-alive"  
 
          },
            
       })
 
       const dashboardResponse = await dashboards.json();
       console.log(dashboardResponse);
       console.log(`Status code for creatingOppty is ${dashboards.status()}`)
 
       
       if(dashboardResponse.recentItems.length>=0)
       {
             for (let i = 0; i < dashboardResponse.recentItems.length; i++) {
                 
                let currentItem = dashboardResponse.recentItems[i];
                
                if (currentItem.Title==="CreateDashboard1") {
 
                   DashboardID = currentItem.Id;
                   break;
                }     
             }
       }
 
      console.log(DashboardID);
  
 })
 