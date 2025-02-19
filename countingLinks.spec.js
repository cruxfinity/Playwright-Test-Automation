const {test,expect}=require("@playwright/test")
test("countinglinks",async ({page})=>{
    await page.goto("https://demoblaze.com/")
    const links = await page.$$('a')
    for(const link of links){
      const link_text = await link.textContent()
      console.log(link_text)
    }
    await page.close()
})