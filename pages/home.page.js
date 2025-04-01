import BasePage from './base.page';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.heroBannerTitleSelectors = [
            '[data-testid="herobanner-title1"]',
            'h1 > span',
            '//span[contains(text(), "Live the dream in a vacation home")]'
        ];
        this.fligthButtonSelectors = [
            '#flights',
            '//span[contains(text(), "Flights")]'
        ];
        this.searchInputSelectors = [
            '//input[contains(@name, "ss")]',
            '[placeholder="Where are you going?"]',
            '[data-destination="1"]'
        ];
        this.selectOptionSelector = "#autocomplete-result-0";
        this.searchButtonSelector = '[type="submit"]';
        this.closeSearchBoxDate = '[data-testid="herobanner-subtitile"]';
        this.containDateslecator = '[data-testid="searchbox-dates-container"]';        
    }

    async getHeroBannerTitle() {
        return await this.getText(this.heroBannerTitleSelectors);
    }

    async clickFlightButton() {
        await this.click(this.fligthButtonSelectors);
    }    

    async fillDestination(destination) {
        await this.click(this.searchInputSelectors);
        await this.type(this.searchInputSelectors, destination);  
    }    
    
    async selectFirstOption() {
        await this.waitForTimeout();
        await this.click(this.selectOptionSelector);
    }

    async selectDate(date) {
        const dateSelector = `[data-date="${date}"]`;    
        await this.click(dateSelector);
    }

    async clickSearchBoxDate(){
        await this.click(this.containDateslecator);
    }

    async clickSearchButton() {
        await this.click(this.closeSearchBoxDate);
        await this.click(this.searchButtonSelector);
    }
}
