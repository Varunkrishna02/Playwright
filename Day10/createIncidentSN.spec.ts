import { test, chromium } from "@playwright/test";

test('createIncidentSNOW', async({request})=>{

    const response = await request.post("https://dev187606.service-now.com/api/now/table/incident",
    
    {
        headers:{
            "Content-Type": 'application/json',
            "Authorization": "Basic YWRtaW46YiFTS2otVTRrajFa"
        },
        data:{

            "short_description": "Created using PW"
        }
    });

    const responseBody = await response.json();
    console.log(responseBody);

    console.log(`The Response status is ${response.status()}`);
    console.log(`The SysID is ${responseBody.result.sys_id}`)

})