import test from "playwright/test";

test("bing searches with multiple keywords", async ({ page }) => {
    //declare the array list
  let cars = Array<string>();
  cars.push('ferrari');
  cars.push('Mercedes');
  cars.push('Audi');

  for (let i = 0; i < cars.length; i++) {
    //navigate to bing.com
    await page.goto('https://www.bing.com/')

    //enter a keyword on the search field. .fill is same as sendkeys in selenium
    await page.locator("//*[@name='q']").fill(cars[i])

    await page.waitForTimeout(2000)

    // submit with keyboard enter
    await page.keyboard.press('Enter')

    //wait few seconds
    await page.waitForTimeout(3000)

    //capture the search result text
    let results = await page.locator("//*[@class='sb_count']").textContent()
    console.log(results)
    let arrayReslts = results?.split(' ')
    console.log("Search number for " + cars[i] + " is : " + arrayReslts?.[1])
  }
});

