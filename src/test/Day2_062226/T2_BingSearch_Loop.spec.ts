import test from "@playwright/test";

test("Bing searches with multiple keywords", async ({ page }) => {

    let cars = Array<string>();
    cars.push("AMG");
    cars.push("Alpine");
    cars.push("Mansory");

    for (let i = 0; i < cars.length; i++) {
        await page.goto("https://www.bing.com/");
        await page.waitForTimeout(2500);
        await page.locator("//*[@name='q']").fill(cars[i]);
        await page.waitForTimeout(2500);
        await page.locator("//*[@name='q']").press('Enter');
        await page.waitForTimeout(2500);
        let searchResults = await page.locator("//*[@class='sb_count']").textContent();
        let arrayResults = searchResults?.split(' ');
        console.log("Total Search Results for " + cars[i] + ": " + arrayResults?.[1]);

    }


});