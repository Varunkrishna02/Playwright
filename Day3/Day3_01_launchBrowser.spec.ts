1. /* Create a new browser instance
2. Create a browser context
3. Create a new page
4. Load the url https://login.salesforce.com/
5. Wait for 10 seconds
6. Print the current url
7. Print the page title */


import { chromium, test } from "@playwright/test";


test("To launch Browser", async() => {
    
  const browser = await chromium.launch({headless: false, channel: 'chrome'});
   
  const browserContext = await browser.newContext();

  const newPage = await browserContext.newPage();

  await newPage.goto("https://login.salesforce.com");

  await newPage.waitForTimeout(10000);

}); 

test.only("To launch a browser using browser contexts", async () => {


    //To launch the browser --> creates a new browser instance
    //const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const browser = await chromium.launch({headless:false, channel:"chrome"});
    //Get the new browser context
    const browserContext = await browser.newContext();
    const browserContext1 = await browser.newContext();
    
    
    //Get a new page
    const page = await browserContext.newPage();
    
    
    const page1 = await browserContext1.newPage()
    
    
    //Load the Url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page1.goto("https://leafground.com/alert.xhtml");
    
    
    await page.waitForTimeout(10000);
    
    })