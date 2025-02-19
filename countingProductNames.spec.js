const {test,expect} = require("@playwright/test")
test("countingproductnames",async ({page})=>{
    await page.goto("https://demoblaze.com/")
    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
    const prodNames= await page.$$("//div[@id='tbodyid']//div/h4/a")
    for(const product of prodNames){
        const prodName = await product.textContent()
        console.log(prodName)
    }
    })
    //await page.close()