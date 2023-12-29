//https://dev187606.service-now.com/api/now/table/{tableName}

import { test, chromium } from "@playwright/test";

test('getIncidentSNOW', async({request})=>{

    const response = await request.get("https://dev187606.service-now.com/api/now/table/incident/6f3f24f1931f311075323c9efaba1089",
    
    {
        headers:{
            "Content-Type": 'application/json',
            "Authorization": "Basic YWRtaW46YiFTS2otVTRrajFa"
        },
 
    });

    const responseBody = await response.json();
    console.log(responseBody);

    console.log(`The Response status is ${response.status()}`);
    
})