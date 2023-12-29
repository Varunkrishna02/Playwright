/*
1.Create a promise in code that there will be new page
    context.waitforEvent("page")
2. Perform a useraction which is supposed to open a new Window
     page.getByText('open').click()
3. Now wait for promise to get completed.
     const window = await window promise
4.Switch to new window for performing actions further
     window.bringtofront();

*/


//https://leafground.com/window.xhtml

import { expect,test, chromium } from "@playwright/test";
import { title } from "process";

test("windoeHandling", async({page,context}) =>{ 

     test.setTimeout(120000);
    
    await page.goto("https://leafground.com/window.xhtml");

    //Create a promise in code that there will be new page
    const windowPromise =  context.waitForEvent("page");

    //Perform a useraction which is supposed to open a new Window
    page.getByText('Open', {exact:true }).click();

    //Now wait for promise to get completed.
    const window = await windowPromise;

    //Switch to new window for performing actions further
    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(window.url());
    await window.waitForTimeout(5000);
    await window.locator("#email").type("testing@gmail.com");
    await window.close();

    //Validations in Old window    
    await page.locator("i[class='pi pi-home']").click();
    await page.waitForTimeout(5000);

})

test("Multiple promises with Promise.all method", async({page,context}) =>{ 

     test.setTimeout(120000);    
     await page.goto("https://leafground.com/window.xhtml");
 
     
     const [newpage] = await Promise.all([
    
          context.waitForEvent("page"),
          page.getByText('Open', {exact:true }).click()

     ])
   
     //Switch to new window for performing actions further
     await expect(newpage).toHaveURL("https://leafground.com/dashboard.xhtml");
     console.log(newpage.url());
     await newpage.waitForTimeout(5000);
     await newpage.locator("#email").type("testing@gmail.com");
     await newpage.close();
 
     //Validations in Old window    
     await page.locator("i[class='pi pi-home']").click();
     await page.waitForLoadState('load');

     await page.waitForTimeout(5000);
 
 })

 test.only("MultiplePages  with Promise.all method", async({page,context}) =>{ 

     let webPage: any;

     test.setTimeout(120000);    
     await page.goto("https://leafground.com/window.xhtml");
 
     
     const [MultiplePages] = await Promise.all([
    
          context.waitForEvent("page"),
          page.getByText('Open Multiple', {exact:true }).click()

     ])
   
     //Switch to new window for performing actions further
     await MultiplePages.waitForLoadState("load");
     const pages = MultiplePages.context().pages();
     console.log(`No of Pages is ${pages.length}`);

     //To print the url of all pages
     pages.forEach(tabs =>{
       console.log(tabs.url());
       //console.log(tabs.title());
     })

     //To bring specific page to front
     pages[1].bringToFront();
     await page.waitForTimeout(5000);

     for (let index = 0; index < pages.length; index++) {
          await pages[index].waitForLoadState('load');
          const title = await pages[index].title();
          console.log(title);
          await page.waitForTimeout(3000);
          if (title==='Web Table') {
              webPage = pages[index];
               
          }
          
     }
     await webPage.locator("input[placeholder='Search']").type("Amy Elsner");
     await page.waitForTimeout(5000);
 
     //Validations in Old window    
})