// new test
import { test } from '@playwright/test';

test('Getting the current url of the page', async ({ page }) => {
    await page.goto('https://the-internet-5chk.onrender.com/');
    const actualURL = page.url();
    console.log(actualURL);
});

test('set the window size', async ({ page }) => {
    await page.goto('https://the-internet-5chk.onrender.com/');
    await page.waitForTimeout(3000); // wait 3 sec
    await page.setViewportSize({ width: 280, height: 320 });
    await page.waitForTimeout(3000); // wait 3 sec after setting viewport size
});