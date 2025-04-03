const { test, expect } = require("@playwright/test")
test("file uploading", async ({ page }) => {
  await page.goto("https://www.foundit.in/");
  await page.locator("").setInputFiles("your file path");
  await page.waitForTimeout(3000);
  //now uploading multiple files 
  await page.setInputFiles(['file1', 'file2']);
})