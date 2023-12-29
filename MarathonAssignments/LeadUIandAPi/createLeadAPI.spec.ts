import { chromium } from "@playwright/test";
import { getSalesforceAccessToken } from "../DashboardUIandAPI/OtherMethod/getAuthAPI.spec" ;
import { request } from "http";


let access_token : any;
let inst_url:any ;
let LastName :any;

async function createLeads() {

    const authData = await getSalesforceAccessToken();
    access_token = authData.access_token;
    inst_url = authData.inst_url;
    
    let Salutation = "Mr." ;
    LastName = "ApiTesting1";
    let Company = "AZ" ;

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    let leadURL = `${inst_url}//services/data/v59.0/sobjects/Lead`;
    const createLeadsSF = await apiRequestContext.post(leadURL,
       {
         headers:{

            "Authorization": `Bearer ${access_token}`,
            "Content-Type" : "application/json"

         },

         data: {

            "Salutation": Salutation,
            "LastName": LastName,
            "Company": Company

         }
           
      })

      const leadResponse = await createLeadsSF.json();
      console.log(leadResponse);
      console.log(`Status code for creatingLEad is ${createLeadsSF.status()}`)
      
     //let leadID = leadResponse.id;
     //console.log(`Lead ID is ${leadID}`);  

     return { leadID : leadResponse.id , lName: LastName};

}

export{createLeads}

