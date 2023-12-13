import { expect, test } from "@playwright/test";

test("Assertion1", async({page})=>{

   await page.goto("https://leafground.com/waits.xhtml");

   await page.waitForLoadState('load');

   const buttonHeading = page.locator('.card').filter({hasText: "Wait for Invisibility"});
   const buttonToClick = buttonHeading.getByRole('button').filter({hasText: "Click"});
   const buttongoingtoHide =buttonHeading.getByRole('button').filter({hasText: "I am about to hide"});

   await buttonToClick.click();
   await expect(buttongoingtoHide).toBeHidden({timeout: 10000});

});
