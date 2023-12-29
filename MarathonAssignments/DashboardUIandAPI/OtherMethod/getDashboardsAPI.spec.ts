import { chromium } from "@playwright/test";
import { getSalesforceAccessToken } from "./getAuthAPI.spec" ;

import { request } from "http";




let access_token : any;
let inst_url:any
let DashboardID : any ;

async function getDashboards() {


    const authData = await getSalesforceAccessToken();
    access_token = authData.access_token;
    inst_url = authData.inst_url;

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    let dashboardURL = `${inst_url}//services/data/v58.0/sobjects/Dashboard`;
    const dashboards = await apiRequestContext.get(dashboardURL,
       {
         headers:{

            "Authorization": `Bearer ${access_token}`,
            "Connection": "keep-alive"  

         },
           
      })

      const dashboardResponse = await dashboards.json();
      console.log(dashboardResponse);
      console.log(`Status code for deleteDashboard is ${dashboards.status()}`)
      
            
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
      
      console.log(`Dashboard ID is ${DashboardID}`);

    return{dbID : DashboardID}
      

}

export{getDashboards}

