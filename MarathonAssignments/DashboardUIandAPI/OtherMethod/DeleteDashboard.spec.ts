import { chromium, expect } from "@playwright/test";
import { getSalesforceAccessToken } from "./getAuthAPI.spec" ;
import { getDashboards } from "./getDashboardsAPI.spec";


import { request } from "http";



let access_token : any;
let inst_url:any
let dbID : any ;

async function deleteDashboards() {


    const authData = await getSalesforceAccessToken();
    access_token = authData.access_token;
    inst_url = authData.inst_url;

    const getDashboard = await getDashboards();
    dbID = getDashboard.dbID;

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    let dashboardURL = `${inst_url}//services/data/v58.0/sobjects/Dashboard/${dbID}`;
    const dashboards = await apiRequestContext.delete(dashboardURL,
       {
         headers:{

            "Authorization": `Bearer ${access_token}`,
            "Connection": "keep-alive"  

         },
           
      })

      
      console.log(`Status code for deleteDashboard is ${dashboards.status()}`)    
      
}

export{deleteDashboards} 