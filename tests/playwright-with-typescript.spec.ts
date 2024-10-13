import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Test case1: verify that the page title is Practice and URL", async ({ page }) => {
    const title = await page.title();
    expect(title).toBe("Practice");
    const url = page.url();
    expect(url).toContain("practice.cydeo.com");
  });

  test("Test case2: verify that all the links are displayed and enabled", async ({ page }) => {
        const links = await page.locator("//ul[@class='list-group']/li/a").all();
        for(let link of links){
            const isEnabled = await link.isEnabled();
            expect(isEnabled).toBe(true);
            await expect(link).toBeVisible();
        }
  });

});