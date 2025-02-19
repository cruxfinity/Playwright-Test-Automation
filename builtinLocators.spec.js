const {test,expect}=require("@playwright/test")

test("built-in-locators",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const logo= await page.getByAltText('company-branding')
    const placeholder = await page.getByPlaceholder('Username')
    await expect(logo).toBeVisible()
    await expect(placeholder).toBeVisible()
    await page.close()
})