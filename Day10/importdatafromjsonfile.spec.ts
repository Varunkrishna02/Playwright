import { expect,test } from "@playwright/test";

import  loginData from "../JsonTestData/testdataLogin.json";

test("ImportData from Json",async({page,context})=>{

    test.setTimeout(120000);

    console.log(loginData);


    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill(loginData.username);
    await page.locator('[name="pw"]').type(loginData.password);
    await page.locator('#Login').click();
    await page.waitForLoadState('load');

});