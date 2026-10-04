//New test for locators
import { test } from '@playwright/test';

test('Locators intro xPath', async ({ page }) => {
    await page.goto('https://google.com/');
    const searchBox = page.locator("//textarea[@name='q']");
    await searchBox.fill('Playwright');
    await searchBox.press('Enter');
});

test('Locators intro CSS', async ({ page }) => {
    await page.goto('https://google.com/');
    const searchBox = page.locator("textarea[name='q']");
    await searchBox.fill('Playwright');
    await searchBox.press('Enter');
});