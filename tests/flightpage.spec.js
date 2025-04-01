import { test, assertContainsAnyText, assertEqual, assertContainsText, assertIsTrue } from "./baseTest-setup";
import HomePage from "../pages/home.page";
import FlightPage from "../pages/flight.page";

test('Verify navegate Flight Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightPage(page);
    const TextTitles = "Search hundreds of flight sites at once.";

    await homePage.clickFlightButton();

    const textTitle = await flightPage.getTitleFlightPage();

    assertContainsAnyText(textTitle, TextTitles, 
        `Title Flight Page text "${textTitle}" does not contain any of the expected titles: ${TextTitles}`);
});

test('Verify return date selection when searching for a round-trip flight', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightPage(page);

    const originCity = "Buenos Aires, Argentina (BUE)";   
    const destinationCity = "Rio de Janeiro, Brazil (RIO)"; 
    
    const startDate = 'April 12, 2025';

    const flightDepartureExpected = 'Departure';
    const flightReturnExpected = 'Return';

    await homePage.clickFlightButton();
    await flightPage.clickTypeFlight();
    await flightPage.clickRoundTripOption();
    await flightPage.clickCloseButtonFormField();
    await flightPage.fillFromField(originCity);
    await flightPage.fillDestinationField(destinationCity);
    await flightPage.selectDateFlight(startDate);

    const flightDeparture = await flightPage.getDepartureLabel();
    const flightReturn = await flightPage.getReturnLabel();

    assertContainsAnyText(flightDeparture, flightDepartureExpected, 
        `The text for round-trip flights (departure) does not match. Expected: "${flightDepartureExpected}", but got: "${flightDeparture}"`);
    
    assertContainsAnyText(flightReturn, flightReturnExpected, 
        `The text for round-trip flights (return) does not match. Expected: "${flightReturnExpected}", but got: "${flightReturn}"`);  
});


test('Verify that all available round-trip flights are displayed in the flight results list', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightPage(page);

    const originCity = "Buenos Aires, Argentina (BUE)";   
    const destinationCity = "Rio de Janeiro, Brazil (RIO)"; 
    
    const startDate = 'April 12, 2025';
    const endDate = 'April 20, 2025';    

    await homePage.clickFlightButton();
    await flightPage.clickTypeFlight();
    await flightPage.clickRoundTripOption();
    await flightPage.clickCloseButtonFormField();
    await flightPage.fillFromField(originCity);
    await flightPage.fillDestinationField(destinationCity);
    await flightPage.selectDateFlight(startDate);
    await flightPage.selectDateFlight(endDate);
    await flightPage.clickCabinEconomyClass();
    await flightPage.clickSearchButton();

    const isRoundTrip = await flightPage.checkFlightInfoText();

    assertIsTrue(isRoundTrip, 
        `All roundtrip flights were expected to have the destinations, but some were found without.`);
});
