import test from "playwright/test";

test ("USPS mouse hover test", async ({ page }) => {

    //go to usps
    await page.goto("https://www.usps.com/");

    //hover over quick tools
    await page.locator("//*[text()='Quick Tools']").hover();

    await page.waitForTimeout(2000);

    //click on track a package
    await page.locator("//*[text()='Track a Package']").click();

    await page.waitForTimeout(2000);

});