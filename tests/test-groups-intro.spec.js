//new test for test groups
import { test } from '@playwright/test';
import { clearScreenDown } from 'node:readline';

test.describe('Group 1', () => {

    test.beforeAll(async ({ page }) => {
        console.log('Before all tests in Group 1');
    });

    test.beforeEach(async ({ page }) => {
        console.log('Before each test in Group 1');
    });

    test.afterEach(async ({ page }) => {
        console.log('After each test in Group 1');
    });

    test.afterAll(async ({ page }) => {
        console.log('After all tests in Group 1');
    });

    test('Group 1 Test 1', async ({ page }) => {
    console.log('Group 1 Test 1');  
    });

    test('Group 1 Test 2', async ({ page }) => {
        console.log('Group 1 Test 2');
    });

    test('Group 1 Test 3', async ({ page }) => {
        console.log('Group 1 Test 3');
    });


});