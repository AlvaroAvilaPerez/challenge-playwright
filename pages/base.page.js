export default class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async findLocator(selector) {
        const locator = this.page.locator(selector);
        return locator;
    }

    async findLocatorFromArray(selectors) {
        for (const selector of selectors) {
            const locator = this.page.locator(selector);
            const count = await locator.count();
            if (count > 0) {
                return locator;
            }
        }
    }

    async findSelfHealingLocator(selector) {
        if (Array.isArray(selector)) {
            return this.findLocatorFromArray(selector); // Array
        } else {
            return this.findLocator(selector); // String
        }
    }

    async click(selector) {
        const element = await this.findSelfHealingLocator(selector);
        await element.click();
    }

    async goToUrl(url) {
        await this.page.goto(url, { waitUntil: 'load' });
    }

    async type(selector, text) {
        const element = await this.findSelfHealingLocator(selector);
        await element.focus();
        await element.fill(text);
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('load');
    }

    async waitForTimeout(ms = 2000) {
        await this.page.waitForTimeout(ms);
    }

    async waitForVisibleOption(text) {
        const selector = `input[value="${text}"]`;
        await this.waitForElement(selector);
    }

    async waitForElement(selector) {
        const element = await this.findSelfHealingLocator(selector);
        await element.waitFor({ state: 'attached' });
    }

    async getText(selector) {
        await this.waitForPageLoad();
        const element = await this.findSelfHealingLocator(selector);
        const textContent = await element.textContent();
        return textContent;
    }

    async countElementsContainingText(selector, text) {
        const elementLocator = await this.findSelfHealingLocator(selector);
        const elements = await elementLocator.all();
        const texts = await Promise.all(elements.map(async element => await element.textContent()));
        return texts.filter(elementText => elementText && elementText.includes(text)).length;
    }

    async getElementsWithFormattedText(selector, text) {
        const elementLocator = await this.findSelfHealingLocator(selector);
        
        const elementsBeforeHover = await elementLocator.all();
        if (elementsBeforeHover.length > 0) {
            await elementsBeforeHover[elementsBeforeHover.length - 1].hover();
            await this.waitForTimeout(); 
        }

        const elementsAfterHover = await elementLocator.all();
        const texts = await Promise.all(elementsAfterHover.map(async element => await element.textContent()));

        const regex = new RegExp(`(^${text}$|, ${text}$)`, 'i');

        const matchingTexts = texts.filter(elementText => elementText && regex.test(elementText.trim())).length;
        
        return matchingTexts.toString(); 
    }


    async getElementsWithExactText(selector, text) {
        const elementLocator = await this.findSelfHealingLocator(selector);
        
        const elementsBeforeHover = await elementLocator.all();
        if (elementsBeforeHover.length > 0) {
            await elementsBeforeHover[elementsBeforeHover.length - 1].hover(); 
            await this.waitForTimeout(); 
        }

        const elementsAfterHover = await elementLocator.all();
        const texts = await Promise.all(elementsAfterHover.map(async element => await element.textContent()));

        const matchingTexts = texts.filter(elementText => elementText && elementText.trim() === text).length;
        
        return matchingTexts.toString(); 
    }

    async getElementsContainingTextWithHover(selector, text) {
        const elementLocator = await this.findSelfHealingLocator(selector);
        
        const elementsBeforeHover = await elementLocator.all();
        if (elementsBeforeHover.length > 0) {
            await elementsBeforeHover[elementsBeforeHover.length - 1].hover(); 
            await this.waitForTimeout(); 
        }

        const elementsAfterHover = await elementLocator.all();
        const texts = await Promise.all(elementsAfterHover.map(async element => await element.textContent()));

        const matchingTexts = texts.filter(elementText => elementText && elementText.includes(text)).length;
        
        return matchingTexts.toString();
    }

    async getElementsContainingText(selector, text) {
        const elementLocator = await this.findSelfHealingLocator(selector);
        const elements = await elementLocator.all();        
        const texts = await Promise.all(elements.map(async element => await element.textContent()));    
        const matchingTexts = texts.filter(elementText => elementText && elementText.includes(text)).length;    
        return matchingTexts.toString(); 
    }

    async filterByText(selector, text) {
        const elementLocator = await this.findSelfHealingLocator(selector);
        return elementLocator.filter({ hasText: text }).first();
    }

    async checkElementIsPresent(selector) {
        try {
            await this.page.locator(selector).waitFor({ state: 'visible', timeout: 1000 });
            return true; 
        } catch {
            return false; 
        }
    }

    async countTextContents(selector) {
        await this.page.waitForTimeout(5000);
        const elementLocator = await this.findSelfHealingLocator(selector);
        return await elementLocator.allTextContents();
    }
}
