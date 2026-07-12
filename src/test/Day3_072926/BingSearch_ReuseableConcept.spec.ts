import test from "@playwright/test";
import {typeOnElement, submitOnElement, getTextContent, visitPage, wait} from "../../main/ReuseableMethods";

test("Bing search test", async ({ page }) => {
    // navigate to Bing website
    await visitPage(page, "https://www.bing.com/");
    //add wait for 3 seconds
    await wait(page, 3000);
    //enter search term in search box
    await typeOnElement(page, "//*[@name='q']", "rugby");
    //press enter key to search
    await submitOnElement(page, "//*[@name='q']");
    //wait for search results to load
    await wait(page, 2500);
    //capture the search results text
    let searchResults = await getTextContent(page, "//*[@class='sb_count']");
    console.log("Search Results Text: " + searchResults);
    let arrayResults = searchResults?.split(' ');
    console.log("Total Search Results: " + arrayResults?.[1]);
});