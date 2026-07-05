import test, { expect } from "@playwright/test";

test("USPS Mouse Hover Test", async ({ page }) => {
    // Navigate to the USPS website
    await page.goto("https://www.usps.com/");

    let quickTools = page.getByRole("menuitem", { name: "Quick Tools" });

    await quickTools.hover();
    
    let trackPackage = page.locator('text=Track a Package');

   



  
});