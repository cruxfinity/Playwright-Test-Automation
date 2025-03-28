const { test, expect } = require("@playwright/test")
test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.evaluate(() => {
    window.scrollBy(0, 700)
  })
  await page.fill("#datepicker", "06/25/2001");
  await page.waitForTimeout(2000)
  const datepicker2 = await page.locator("#txtDate");
  await datepicker2.click();
  await page.selectOption(".ui-datepicker-month", "Jun");
  await page.selectOption(".ui-datepicker-year", "2015");

  const elements = await page.$$(
    "//table[@class='ui-datepicker-calendar']/tbody/tr/td"
  );
  for (let i = 0; i < elements.length; i++){
    // console.log(await elements[i].innerText());
    if (await elements[i].innerText() == 25) {
      await elements[i].click()
    }
  }
  await page.waitForTimeout(2000)
})