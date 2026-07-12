import test, { expect } from "@playwright/test";

test("Disney Verify Title", async ({ page }) => {

    //go to disney.com
    await page.goto("https://www.disney.com/");

    //wait 2 seconds
    await page.waitForTimeout(2000);

    //hover over the "Movies" menu item
    let movies = page.locator("#Movies-dropdown");
    await movies.hover();

    //wait 2 seconds
    await page.waitForTimeout(2000);

    //click on the "All Movies" link
    let allMovies = page.locator("text=All Movies").nth(1);
    await allMovies.click();

    //click the first movie in the list
    let firstMovie = page.locator("//*[@class='thumb reserved-ratio']").nth(0);
    await firstMovie.click();
    
    //click watch teaser button
    let watchTeaser = page.getByRole("button", { name: "Watch Teaser" });
    await watchTeaser.click();

    //add 2 seconds wait
    await page.waitForTimeout(2000);

    let movieTitle = await page.locator("//*[@class='title']").nth(7).textContent();
    
    //print movie title to console
    console.log("Movie Title: " + movieTitle);

});
