const {test,expect}=require("@playwright/test")

test('locators',async ({page})=>{
   await page.goto("https://demoblaze.com/")
   await page.locator('id=login2').click()
   await page.locator('#loginusername').fill('pavanol')
   await page.locator('#loginpassword').fill('test@123')
   await page.locator("//button[contains(text(),'Log in')]").click()
   const logout=await page.locator("//button[contains(text(),'Log out')]")
   await expect(logout).toBeVisible({timeout:5000})
   await page.close()
})