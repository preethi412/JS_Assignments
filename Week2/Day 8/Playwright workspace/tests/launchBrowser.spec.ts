import test, { chromium } from '@playwright/test'

test('launch chromium browser',async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in')
    await page.waitForTimeout(3000)
    console.log(await page.title());
    
}) 
 