import test from "@playwright/test";

test('learn page fixture',async({page})=>{
    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(3000);
})