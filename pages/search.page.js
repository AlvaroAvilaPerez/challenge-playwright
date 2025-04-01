// search.page.js
import BasePage from './base.page';

export default class SearchPage extends BasePage {
    constructor(page) {
        super(page);
        this.sectionFilterBySelector = '[data-testid="filters-group"]';
        this.checkBoxSelector = '[data-testid="filters-group-label-content"]';
        this.searchResultSelectors = 'div > h1';
        this.ListResultSelector = '[data-testid="address"]';
        this.availabilityBtnSelector = '[data-testid="availability-cta"]';
        this.loadMoreResultsBtnSelector = '//button[span[text()="Load more results"]]'
        this.availabilitySelector = '[data-testid="availability-cta-btn"]';
        this.propertyCardsSelector = '[data-testid="property-card-container"]';
    }

    async groupSections(sectionName) {
        return this.filterByText(this.sectionFilterBySelector, sectionName);
    }
    
    async sectionsChecksBox(sectionName, checkboxName) {
        const sectionLocator = await this.groupSections(sectionName);
        return sectionLocator.locator(this.checkBoxSelector).filter({ hasText: checkboxName }).first();
    }
    
    async clickInstalacionesGroup(sectionName, checkboxName) {
        await this.waitForPageLoad();
        const checkboxLocator = await this.sectionsChecksBox(sectionName, checkboxName);
        await checkboxLocator.click();
    }

    async getSearchResultText() {
        await this.waitForTimeout();
        return await this.getText(this.searchResultSelectors);
    }

    async getNumberFromText(text) {
        const match = text ? text.match(/\d+/) : null;    
        if (match) {
            return match[0]; 
        }    
        return "No match found"; 
    }   

    async getNumberResults(destination) {
        this.waitForTimeout();
        return await this.getElementsWithFormattedText(this.ListResultSelector, destination);
    }    

    async checkAvailabilityButtons(text) {
        const propertyCards = await this.page.locator(this.propertyCardsSelector);
        let countNotSeeAvailability = 0;
        const totalCards = await propertyCards.count();
        for (let i = 0; i < totalCards; i++) {
            const button = propertyCards.nth(i).locator(this.availabilitySelector);
            const buttonText = await button.textContent();
            if (buttonText !== text) {
                countNotSeeAvailability++;
            }
        }

        if (countNotSeeAvailability > 0) {
            return { result: false, count: countNotSeeAvailability, total: totalCards };
        }

        return { result: true, count: 0, total: totalCards };
    }
}
