const{test,expect}=require("@playwright/test")

test('Home Page',async({page})=>{
   await page.goto('https://demoblaze.com/')
   const pageTitle =await page.title()
   console.log("pageTitle is ",pageTitle)
    await expect(page).toHaveTitle('STORE')
    await page.close()
})