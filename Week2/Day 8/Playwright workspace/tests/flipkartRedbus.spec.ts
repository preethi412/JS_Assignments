import test, { chromium, firefox } from "@playwright/test";

test('launch Edge browser',async()=>{
    const browserEdge = await chromium.launch({channel:'msedge',headless:false});
    const contextEdge = await browserEdge.newContext();
    const page = await contextEdge.newPage();
    await page.goto('https://www.redbus.in');
    await page.waitForTimeout(3000);
    console.log("Title : " ,await page.title());
    console.log("URL : " ,await page.url());
}) 


test('launch firefox browser',async()=>{
    const browserFox = await firefox.launch({headless:false});
    const contextFox = await browserFox.newContext();
    const page = await contextFox.newPage();
    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(3000);
    console.log("Title : " ,await page.title());
    console.log("URL : " ,await page.url());
}) 