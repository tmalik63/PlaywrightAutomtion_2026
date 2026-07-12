//Method to type on an element
export async function typeOnElement(page: any, xpath: string, value: string) {
    await page.locator(xpath).fill(value);
}

//Method to submit on an element
export async function submitOnElement(page: any, xpath: string) {
    await page.locator(xpath).press('Enter');
}

//Method to click on an element
export async function clickOnElement(page: any, xpath: string) {
    await page.locator(xpath).click();
}

//Method to get text content from an element
export async function getTextContent(page: any, xpath: string) {
    return await page.locator(xpath).textContent();
}

//Method to visit a page
export async function visitPage(page: any, url: string) {
    await page.goto(url);
}

//Method to hover on an element
export async function hoverOnElement(page: any, xpath: string) {
    await page.locator(xpath).hover();
}

//Method for hard wait
export async function wait(page: any, timeout: number) {
    await page.waitForTimeout(timeout);
}
