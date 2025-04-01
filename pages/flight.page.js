import BasePage from './base.page';

export default class FlightPage extends BasePage {
    constructor(page) {
        super(page);
        this.titleFlightPageSelector = [".title", "h2 > span"];
        this.typeFlightSelector = '(//div[contains(@aria-haspopup, "listbox")])[1]';
        this.roundTripOptionSelector = ['#roundtrip', '//span[contains(text(), "Round-trip")]'];
        this.closeButtonFormFieldSelector = ['(//*[@tabindex="-1"])[3]', '(//*[@tabindex="-1"])[1]'];
        this.inputFromFieldSelector = ['(//input[@tabindex="0"])[1]', '(//input[@placeholder="From?"])'];
        this.inputDestinationFieldSelector = ['(//input[@tabindex="0"])[2]', '(//input[@placeholder="To?"])'];
        this.inputStartDateSelector = '//div[contains(@aria-label, "Start date")]';
        this.calendarOpen = '.Gagx-content';
        this.calendarSelector = '[aria-label="Start date calendar input"]';
        this.selectOptionFlightOriginSelector = ["(//ul[contains(@id, 'flight-origin-smarty-input-list')])[1]"];
        this.selectOptionFlightDestinationSelector = ["(//ul[contains(@id, 'flight-destination-smarty-input-list')])[1]"];
        this.dateFlightSelector = (date) => [`//div[contains(@aria-label, '${date}')]`,
        `//div[contains(@aria-label, '${date} Prices on this day are above average')]`];
        this.cabinEconomyClassSelector = ['//label[text()="Economy"]'];
        this.searchButtonSelector = ['//button[contains(@aria-label, "Search")]'];
        this.flightInformationInTheResult = ['(//*[@class="hJSA-list"]//*[contains(@class, "xdW8")])'];
        this.departureSelector = '(//span[contains(@class, "XjzK-calendarFlexSelectLabel")])[1]';
        this.returnSelector = '(//span[contains(@class, "XjzK-calendarFlexSelectLabel")])[2]';
        this.flightInfoSelector = '//*[@class="hJSA-list"]//*[contains(@class, "xdW8")]';
    }

    async getTitleFlightPage() {
        return await this.getText(this.titleFlightPageSelector);
    }

    async clickTypeFlight() {
        await this.click(this.typeFlightSelector);
    }

    async clickRoundTripOption() {
        await this.click(this.roundTripOptionSelector);
    }

    async clickCloseButtonFormField() {
        await this.waitForTimeout();
        await this.click(this.closeButtonFormFieldSelector);
    }

    async selectOptionFlightOrigin() {
        await this.waitForTimeout();
        await this.click(this.selectOptionFlightOriginSelector);
    }

    async selectOptionFlightDestination() {
        await this.waitForTimeout();
        await this.click(this.selectOptionFlightDestinationSelector);
    }

    async fillFromField(originCity) {
        await this.waitForTimeout();
        await this.type(this.inputFromFieldSelector, originCity);
        await this.selectOptionFlightOrigin()
    }

    async fillDestinationField(DestinationCity) {
        await this.waitForTimeout();
        await this.type(this.inputDestinationFieldSelector, DestinationCity);
        await this.selectOptionFlightDestination()
    }

    async clickStarDateField() {
        await this.click(this.inputStartDateSelector);
    }

    async clickFieldDate() {
        const isPresent = await this.checkElementIsPresent(this.calendarOpen);
    }

    async selectDateFlight(date) {
        const isPresent = await this.checkElementIsPresent(this.calendarOpen);
        const selector = this.dateFlightSelector(date);
        if (isPresent) {
            await this.click(selector);
        } else {
            await this.clickStarDateField();
            await this.click(selector);
        }
    }

    async clickCabinEconomyClass() {
        await this.click(this.cabinEconomyClassSelector);
        await this.click(this.titleFlightPageSelector)
    }

    async clickSearchButton() {
        await this.click(this.searchButtonSelector);
    }

    async checkFlightInfoText() {
        const flightInfoTexts = await this.countTextContents(this.flightInfoSelector);
    
        let matchCount = 0;
    
        for (let text of flightInfoTexts) {
            const normalizedText = text.replace(/\s+/g, '').toUpperCase(); 
    
            if (normalizedText.includes('AEP-SDU') || normalizedText.includes('SDU-AEP')) {
                matchCount++;
            }
        }
    
        const result = matchCount > 0; 
    
        return { result, count: matchCount };
    }

    async getDepartureLabel() {
        return await this.getText(this.departureSelector);
    }

    async getReturnLabel() {
        return await this.getText(this.returnSelector);
    }
}