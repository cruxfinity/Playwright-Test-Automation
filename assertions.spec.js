const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("assertions", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
  await expect(page).toHaveURL(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );
  await expect(page).toHaveTitle("nopCommerce demo store. Register");
  const logoelement = await page.locator(".header-logo");
  await expect(logoelement).toBeVisible();
  await expect(page.locator("#small-searchterms")).toBeEnabled();

  const radio_button = await page.locator("#gender-male");
  await radio_button.click();
  await expect(radio_button).toBeChecked();

  const checkbox = await page.locator("#Newsletter");
  await expect(checkbox).toBeChecked();

  const regButton = await page.locator("#register-button");
  await expect(regButton).toHaveAttribute("type", "submit");

  await expect(page.locator(".page-title h1")).toHaveText("Register");
  await expect(page.locator(".page-title h1")).toContainText("Reg");

  const emailInput = await page.locator("#Email");
  await emailInput.fill("abinash@gmail.com");
  await expect(emailInput).toHaveValue("abinash@gmail.com");
});
