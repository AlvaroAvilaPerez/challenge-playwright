import { test as baseTest } from '@playwright/test';
import BasePage from '../pages/base.page';

export const test = baseTest.extend({
    page: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const basePage = new BasePage(page);
        await basePage.goToUrl('https://www.booking.com');
        await use(page);
        await page.close();
        await context.close();
    },
});

export function assertEqual(actualText, expectedText, message = "") {
    if (actualText !== expectedText) {
        throw new Error(message || `Expected "${expectedText}", but got "${actualText}"`);
    }
    return true;
}

export function assertContainsAnyText(actualText, expectedText, message = "") {
    const expectedList = Array.isArray(expectedText) ? expectedText : [expectedText];
    if (!expectedList.some(text => actualText.includes(text))) {
        throw new Error(message || `Expected text to contain one of: ${expectedList.join(', ')}, 
        but got: "${actualText}"`);
    }

    return true;
}

export function assertContainsText(actualText, expectedText, message = "") {
    if (!actualText.includes(expectedText)) {
        throw new Error(message || `Expected text to contain: "${expectedText}", 
        but got: "${actualText}"`);
    }
}

export function assertIsTrue(result, message = "") {
    if (!result.result) {
        throw new Error(message || `Expected result to be true, but got false`);
    }
}

