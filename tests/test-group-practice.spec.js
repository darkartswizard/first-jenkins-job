//new test for test groups practice
import { test } from '@playwright/test';
test.describe('Practice.cydeo', () => {
    test.beforeAll(async ({ page }) => {
        console.log('Before all tests in Practice.cydeo');
    });
    
    test.beforeEach(async ({ page }) => {
        //nav to Practice.cydeo page - await page.goto('https://the-internet-5chk.onrender.com/');
        await page.goto('https://the-internet-5chk.onrender.com/');
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000); // wait for 3 seconds after each test
    });

    test.afterAll(async ({ page }) => {
        console.log('After all tests in Practice.cydeo');
    });
    
    test('Practice.cydeo Test 1', async ({ page }) => {
        console.log('Practice.cydeo Test 1');
    });

    test('Practice.cydeo Test 2', async ({ page }) => {
        console.log('Practice.cydeo Test 2');
    });

    test('Practice.cydeo Test 3', async ({ page }) => {
        console.log('Practice.cydeo Test 3');
    });

});