import { chromium, expect } from "@playwright/test";
import { getSalesforceAccessToken } from "../DashboardUIandAPI/OtherMethod/getAuthAPI.spec" ;

import { createLeads } from "../LeadUIandAPi/createLeadAPI.spec";

import { request } from "http";



let access_token : any;
let inst_url:any ;
let leadID: any ;
let FirstName : any;


async function updateLeads() {


    const authData = await getSalesforceAccessToken();
    access_token = authData.access_token;
    inst_url = authData.inst_url;

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const leadDataSF = await createLeads();
    leadID =leadDataSF.leadID;

   
   let Title = "UpdateTesting";
   FirstName = "leaf" ;
   
   let updateleadURL = `${inst_url}//services/data/v59.0/sobjects/Lead/${leadID}`;
   
   const updateLeadsSF = await apiRequestContext.patch(updateleadURL,
      {
        headers:{

          "Authorization": `Bearer ${access_token}`,
           "Content-Type" : "application/json"

        },

        data: {

           "FirstName": FirstName,
           "Title": Title

        }
          
     })
     
     console.log(`Status code for update is ${updateLeadsSF.status()}`)
     expect(updateLeadsSF.status()).toBe(204);

     return{fname: FirstName}


}
export{updateLeads}



