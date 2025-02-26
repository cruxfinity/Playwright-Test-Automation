const { test, expect } = require("@playwright/test");
test("checkbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
    let days=[]
     days = await page.$$(
    "//div[@class='form-group'][4]//input[@class='form-check-input']"
    );

console.log("all checkboxes are to be checked")
    for (let day of days) {
        await day.check()
    }
    await page.waitForTimeout(2000)

    for (let i of days) {
        if (i.isChecked()) {
            await i.uncheck()
        }
    }


});
