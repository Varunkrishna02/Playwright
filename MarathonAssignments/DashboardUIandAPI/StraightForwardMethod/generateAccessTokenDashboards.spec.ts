import { test } from "@playwright/test";

let accessToken: any;
let inst_url: any;
let DashboardID: any;

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

      let DashboardID = null;
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

test("Delete Dashboards", async({request})=>{


    let deletedashboardURL = "https://testleaf196-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Dashboard/01Z5h0000002JmhEAE" ;
    const deletedashboards =  await request.delete(deletedashboardURL,
       {
         headers: {

            "Authorization": `Bearer ${accessToken}`,
            "Connection": "keep-alive"  

         }
           
      })
      
      console.log(`Status code for deleteDashboard is ${deletedashboards.status()}`)    

})

