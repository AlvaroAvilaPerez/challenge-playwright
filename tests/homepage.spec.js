import HomePage from "../pages/home.page";
import SearchPage from "../pages/search.page";
import { test, assertContainsAnyText, assertEqual, assertContainsText, assertIsTrue } from "./baseTest-setup";

test('Verify HomePage Hero Banner Text', async ({ page }) => {
    const homePage = new HomePage(page);
    const possibleTitles = ["Live the dream", "Find your"];
    
    const heroBannerText = await homePage.getHeroBannerTitle();
    assertContainsAnyText(heroBannerText, possibleTitles, `Hero Banner text "${heroBannerText}" does not contain any of the expected titles: ${possibleTitles.join(', ')}`);
});

test('Verify hotel availability and filter based on Bogotá City', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    const destination = 'Bogotá';
    
    await homePage.fillDestination(destination);
    await homePage.selectFirstOption(destination);
    await homePage.clickSearchButton();
    await searchPage.clickInstalacionesGroup("Property Type", "Hostels");

    const searchDestinationText = await searchPage.getSearchResultText();
    const searchDestinationNumber = await searchPage.getNumberFromText(searchDestinationText);
    const numberAdressResult = await searchPage.getNumberResults(destination);

    assertContainsText(searchDestinationText, destination, 
        `Expected the search result text to contain: "${destination}", but got: "${searchDestinationText}"`);
    assertEqual(searchDestinationNumber, numberAdressResult, 
        `The search result number does not match the expected. Expected number of results: ${numberAdressResult}, but got: ${searchDestinationNumber}`);
});

test('Verify that hotel availability is updated when selecting check-in and check-out dates.', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    const destination = 'New York';
    const dateStar = '2025-04-12';
    const dateEnd = '2025-04-30';

    const statusAvailability = 'See availability';

    await homePage.fillDestination(destination);
    await homePage.selectFirstOption();
    await homePage.selectDate(dateStar);
    await homePage.selectDate(dateEnd);
    await homePage.clickSearchButton();

    const searchDestinationText = await searchPage.getSearchResultText();
    const allPropertiesAvailability = await searchPage.checkAvailabilityButtons(statusAvailability);

    assertContainsText(searchDestinationText, destination, 
        `Expected the search result text to contain: "${destination}", but got: "${searchDestinationText}"`);
    assertIsTrue(allPropertiesAvailability, 
        `Expected all properties to have availability, but found some properties without availability.`);
});
