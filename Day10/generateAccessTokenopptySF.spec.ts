import { test } from "@playwright/test";

let accessToken: any;
let inst_url: any;

test('generateAccesstoken', async({request})=>{
 
    const clientID = '3MVG95mg0lk4bati.mjqAYSYNe2PC_cuJW956A0v.3zcsvOPRDJBy_lhNoHdiWKPuzFULU6kEDWRQRoPRkkMR';
    const clientSecret = 'A5C7803BA2E135E3DEAB7383DA727E3D2FC8CD34312F92D79B9223D82930EDE4';
    const username = 'varunkrishna@testleaf.com';
    const password = 'Kudipilo0210!'
    const url = 'https://login.salesforce.com/services/oauth2/token'


    const generatingToken =  await request.post(url,{
        
         headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
         },

         form:{
         "grant_type": "password",
         "client_id": clientID,
         "client_secret": clientSecret,
         "username": username,
         "password": password

         }
        });
 
         const generatingTokenJSON = await generatingToken.json();
         console.log(generatingTokenJSON);
        
         accessToken = generatingTokenJSON.access_token;
         inst_url = generatingTokenJSON.instance_url;
         console.log("Bearer " +accessToken);
         console.log(inst_url);
  
});


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
               "Name": "OpptyTestFromPW",
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
               "StageName": "Qualification"
          
         }
          
      })
           
      console.log(`status of updateOppty is ${updateOppty.status()}`)
}) 




