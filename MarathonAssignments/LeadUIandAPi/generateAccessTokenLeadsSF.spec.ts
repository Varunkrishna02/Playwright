import { test } from "@playwright/test";

let accessToken: any;
let inst_url: any;
let leadID:any;

test.beforeEach('generateAccesstoken', async({request})=>{
 
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


test("Create Leads", async({request})=>{

    let Salutation = "Mr." ;
    let LastName = "ApiTesting1";
    let Company = "AZ" ;

   
    let leadURL = `${inst_url}//services/data/v59.0/sobjects/Lead`;
    const createLeadsSF = await request.post(leadURL,
       {
         headers:{

            "Authorization": `Bearer ${accessToken}`,
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
      

     leadID = leadResponse.id;
     console.log(`Lead ID is ${leadID}`);  
})

test("Update Leads", async({request})=>{

   let FirstName = "leaf." ;
   let Title = "UpdateTesting";
   
   let updateleadURL = `${inst_url}//services/data/v59.0/sobjects/Lead/${leadID}`;
   
   const updateLeadsSF = await request.patch(updateleadURL,
      {
        headers:{

          "Authorization": `Bearer ${accessToken}`,
           "Content-Type" : "application/json"

        },

        data: {

           "FirstName": FirstName,
           "Title": Title

        }
          
     })
     
     console.log(`Status code for update is ${updateLeadsSF.status()}`)
     
})



