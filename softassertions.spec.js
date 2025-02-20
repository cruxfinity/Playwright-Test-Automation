const { test, expect } = require("@playwright/test")
test("softassertion",async ({page}) => {
    await page.goto("https://demoblaze.com/");
    
    //hard assertion
    // await expect(page).toHaveTitle("STORE")
    // await expect(page.locator(".navbar-brand")).toBeVisible()

    //soft assertion
     await expect.soft(page).toHaveTitle("STORE");
     await expect.soft(page.locator(".navbar-brand")).toBeVisible();
})