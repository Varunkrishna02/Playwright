import { expect, test } from "@playwright/test";

test("HandleAssertions", async({page}) =>{

    await page.goto("https://leafground.com/input.xhtml");

    const textType = page.getByPlaceholder("Babu Manickam");

    await expect(textType).toBeEnabled();

    await textType.fill("Varun");

    await page.waitForTimeout(1000);

    await expect(page.getByPlaceholder("Disabled")).toBeDisabled();

});