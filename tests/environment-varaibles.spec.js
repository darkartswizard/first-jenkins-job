// credential validation scenarios with environment variables

import { test, expect } from '@playwright/test';


 test('env test', async ({ page }) => {
    console.log(process.env.PRACTICE_USERNAME, process.env.PRACTICE_PASSWORD);
    await page.goto('https://admin:admin@the-internet-5chk.onrender.com/basic_auth');
     //await expect(page.locator('text=Congratulations! You must have the proper credentials.')).toBeVisible();
 });

test('Web-based authentication with embedded credentials from settings env variables', async ({ page }) => {
    const encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({ 'Authorization': `Basic ${encodedCredentials}` });

    await page.goto('https://the-internet-5chk.onrender.com/basic_auth');

    await page.waitForTimeout(3000); // wait for 2 seconds
});