import { test } from "@playwright/test";
import { getAccessToken } from "./authHelper.spec";

let accessToken: any;
let inst_url: any;

test('Use AccessToken in test from function',async()=>{

   const authData = await getAccessToken();
   accessToken = authData.accessToken;
   inst_url= authData.inst_url;
   
})

test("Create Opportunity", async({request})=>{

   let date = "25/12/2023" ;
   let parts = date.split('/');
   let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`
   let opptyURL = `${inst_url}//services/data/v58.0/sobjects/Opportunity`;
   const oppty = await request.post(opptyURL,
       {
         headers:{

            "Authorization": `Bearer ${accessToken}`,
            "Connection": "keep-alive"  

         },

         data:{

               "CloseDate": formattedDate,
               "Name": "Opptytesting from function",
               "StageName": "Prospecting"
          
         }
          
      })
           
      const opptyResponse = await oppty.json();
      console.log(opptyResponse);
      console.log(`Status code for creatingOppty is ${oppty.status()}`)

    /* const opportunityId = opptyResponse.attributes.Id;
      console.log(`Opportunity Id: ${opportunityId}`);
     */ 

})

test("update Opportunity", async({request})=>{

   let date = "25/12/2023" ;
   let parts = date.split('/');
   let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`
   let opptyURL = `${inst_url}//services/data/v58.0/sobjects/Opportunity/0065h00000NVwTIAA1`;
   const updateOppty = await request.patch(opptyURL,
       {
         headers:{

            "Authorization": `Bearer ${accessToken}`,
            "Connection": "keep-alive"  

         },

         data:{

               "CloseDate": formattedDate,
               "Name": "OpptyTestFromPW",
               "StageName": "Prospecting"
          
         }
          
      })
           
      console.log(`status of updateOppty is ${updateOppty.status()}`)
}) 




