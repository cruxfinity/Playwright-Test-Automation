const { test, expect } = require("@playwright/test");
test("mouseHover", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");
  const d = await page.locator(".demonstration-box").nth(0);
  await d.hover();
  await d.click({ button: "right" })
  await page.waitForTimeout(2000);
  
})