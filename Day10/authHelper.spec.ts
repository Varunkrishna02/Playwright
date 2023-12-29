import {chromium } from "@playwright/test";

async function getAccessToken() {

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;
    
    const clientID = '3MVG95mg0lk4bati.mjqAYSYNe2PC_cuJW956A0v.3zcsvOPRDJBy_lhNoHdiWKPuzFULU6kEDWRQRoPRkkMR';
    const clientSecret = 'A5C7803BA2E135E3DEAB7383DA727E3D2FC8CD34312F92D79B9223D82930EDE4';
    const username = 'varunkrishna@testleaf.com';
    const password = 'Kudipilo0210!'
    const url = 'https://login.salesforce.com/services/oauth2/token'


    const generatingToken =  await apiRequestContext.post(url,{
        
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
        
         return {

            accessToken : generatingTokenJSON.access_token,
            inst_url : generatingTokenJSON.instance_url
         }
    
}
export {getAccessToken};