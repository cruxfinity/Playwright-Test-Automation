const { test, expect } = require("@playwright/test");
test.skip("simple alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  await page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toContain("alert");
    await expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });
  await page.click("#alertBtn");
});

test.skip("confirmation alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  await page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toContain("confirm");
    await expect(dialog.message()).toContain("Press a button");
    await dialog.accept();
  });
  await page.click("#confirmBtn");
});

test("prompt alert", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com");
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    // expect(dialog.defaultValue()).toContain("Harry Potter")
    await dialog.accept("abinash");
  })
  await page.locator("#promptBtn").click();
  await page.waitForTimeout(2000)
})



