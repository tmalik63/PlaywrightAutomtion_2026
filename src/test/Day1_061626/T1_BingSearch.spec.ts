import test from "@playwright/test";

test('Bing search test', async ({ page }) => {

    // Navigate to Bing
    await page.goto('https://www.bing.com');

    //enter a keyword on the search field
    await page.locator("//*[@id='sb_form_q']").fill("Playwright");

    await page.waitForTimeout(2000);

    //submit with keyboard enter
    await page.locator("//*[@id='sb_form_q']").press('Enter');

    //wait for the results page to load
    await page.waitForTimeout(3000);

    //caputre the search result text
    let results = await page.locator("//*[@class='sb_count']").textContent();

    //print the search result text
    console.log(results);

    let arrayResults = results?.split(" ");
    console.log("Search number is: " + arrayResults?.[1]);
});