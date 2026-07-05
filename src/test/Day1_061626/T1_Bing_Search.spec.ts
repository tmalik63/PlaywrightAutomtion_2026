import { test, expect } from '@playwright/test';

test('bing search test', async ({ page }) => {
    await page.goto('https://www.bing.com/');
    await page.waitForTimeout(3000);
await page.locator("//*[@name='q']").fill('gaming');
await page.waitForTimeout(3000);
await page.locator("//*[@name='q']").press('Enter');
await page.waitForTimeout(3000);
let searchResults = await page.locator("//*[@class='sb_count']").textContent();
let arrayResults = searchResults?.split(' ');
console.log("Total Search Results: " + arrayResults?.[1]);

//testing 

});