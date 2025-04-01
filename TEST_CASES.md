# User Story 1: Hotel Search & Filtering

### Test Case 1: Verify hotel availability and filter based on City - [Automated](#tags)
**Testing Type:** Functional  
**Description:** This test case verifies that searching for hotels in "New York" displays relevant results.  
**Requirements:**  
- Navigate to page: Booking.com.

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section.
4. Scroll down to the “Property Type” section.
5. Click on the “Hotels” checkbox.

**Expected Behavior:**
- A list of available hotels in the selected city is displayed, matching the applied filters, with relevant details for each hotel.
---
### IA
#### Positive Scenarios:
##### Title: Verify Search Functionality with Abbreviations and Alternative Names
**Description:** This test case verifies that the search functionality correctly returns relevant results when users search using abbreviations or alternative names.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps: 
1. Enter “NYC” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section. 

**Expected Behavior:** 
- The search results should correctly display items that match the full name of abbreviations or alternative names entered.
---
#### Negative Test Cases:
##### Title: Verify Special Character Input and Prevention of Invalid Entries
**Description:** This test case verifies that the system prevents users from entering special characters or invalid inputs in designated fields.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps: 
1. Enter “@!$%#%” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section.  

**Expected Behavior:** 
- The search will not display results, preventing users from entering special characters or invalid inputs.
---
#### Edge Cases:
##### Title: Verify Search with Distant Future Dates and Ensure the System Handles It Appropriately
**Description:** This test case ensures that the system correctly handles searches involving dates in the distant future and returns relevant results.  
**Requirements:**  
- Navigate to page: Booking.com.

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Select check-in and check-out dates (e.g., Sat, Sep 22 - Fri, Oct 23).
3. Click on the “Search” button.  

**Expected Behavior:** 
- The search should return relevant results or display a message about the validity of distant future dates.
---
### Test Case 2: Verify that hotel availability is updated when selecting check-in and check-out dates - [Automated](#tags)
**Description:** This test case verifies that selecting check-in and check-out dates updates the hotel availability and reflects availability for the selected dates.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Select check-in and check-out dates (e.g., Sat, Mar 22 - Sat, Mar 23).
3. Click on the “Search” button.
4. The user is directed to the "Availability" section.  

**Expected Behavior:** 
- The hotel availability is updated based on the selected check-in and check-out dates, displaying only hotels available for those specific dates.
---
### IA  
#### Positive Scenarios:
##### Title: Verify Availability Updates When Selecting Consecutive Check-In and Check-Out Dates
**Description:** This test case verifies that modifying the check-out date multiple times dynamically updates the hotel availability and reflects only the hotels available for the selected period.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Select an initial check-in and check-out date (e.g., Sat, Mar 22 - Wed, Mar 27).
3. Click on the “Search” button.
4. Modify the check-out date to Fri, Mar 29 and click on the “Search” button.
5. Modify the check-out date again to Sun, Mar 31 and click on the “Search” button.  

**Expected Behavior:**
- The hotel availability updates dynamically every time the check-out date is modified.
---
#### Negative Test Cases:
##### Title: Verify That Past Check-In and Check-Out Dates Are Restricted by the System
**Description:** This test case verifies that users cannot select past check-in or check-out dates when searching for hotel availability. The system should prevent the selection of any date before the current date.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Select an initial check-in and check-out date (e.g., Sat, Mar 22 - Wed, Mar 27).  

**Expected Behavior:** 
- The system should disable past dates in the date picker, preventing user selection.
---
### Test Case 3: Verify that when the "Very Good: 8+" filter is applied, the search results display only hotels with a rating of 8 or higher
**Testing Type:** Functional  
**Description:** This test case verifies that applying a "Very Good: 8+" filter updates the hotel search results, displaying only hotels with a guest rating of 8 or higher.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section.
4. Scroll down to the “Review score” section.
5. Click on the "Very Good: 8+" checkbox. 

**Expected Behavior:** 
- The search results are updated, displaying only hotels with a guest rating of 8 or higher.
---
### IA  
#### Positive Scenarios:
##### Title: Verify Search Results When Adjusting the 'Guest Rating' Filter to a Lower Rating (e.g., 6+)
**Description:** This test case verifies that applying the "Pleasant: 6+" filter updates the hotel search results, displaying only hotels with a guest rating of 6 or higher.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps: 
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section.
4. Scroll down to the “Review score” section.
5. Click on the "Pleasant: 6+" checkbox.  

**Expected Behavior:** 
- The search results should update and only show hotels with a rating of 6 or higher.
---

##### Title: Validate 'Guest Rating: 8+' Filter and Test Sorting Results by Different Criteria (e.g., Price, Rating)
**Description:** This test case validates the "Guest Rating: 8+" filter and verifies that when applied, the search results are updated to display only hotels with a rating of 8 or higher. Additionally, the sorting options for the results, such as price and rating, should be tested to ensure the results are correctly ordered.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section.
4. Scroll down to the “Review score” section.
5. Click on the "Very Good: 8+" checkbox.
6. Click on the "Sort by: Our top picks" dropdown.
7. Click on the "Price (Lowest Price)" option.  

**Expected Behavior:**
- When the "Guest Rating: 8+" filter is applied, the search results should update to display only hotels with a rating of 8 or higher. Additionally, when sorting the results by different criteria, such as price or rating, the results should be correctly ordered according to the selected filter.
---
#### Negative Test Cases:
##### Title: Verify System Behavior When Applying Filters Without Selecting a Destination
**Description:** This test case verifies that the system handles filter applications correctly when no destination is selected, ensuring appropriate validation and response.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Without entering a destination, proceed to apply filters (e.g., Price Range, Star Rating, Property Type).
3. Click on the “Search” button.  

**Expected Behavior:** 
- No incorrect or unexpected results should be displayed.
- ---

#### Edge Cases:
##### Title: Verify System Behavior When a Hotel’s Rating Drops Below the Applied Filter
**Description:** This test case verifies that the system correctly updates search results when a hotel's rating drops below the applied rating filter, ensuring that only qualifying hotels remain visible.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps: 
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Go to the "Filter by" section.
4. Simulate a scenario where a hotel’s rating drops below the applied filter (e.g., a 4-star hotel drops to 3.9 stars due to new reviews).
5. Refresh or re-run the search. 

**Expected Behavior:** 
- The hotel whose rating dropped below the selected filter should no longer appear in the search results.
---
### test case 4: Verify sorting by "Lowest Price" updates results
**Testing Type:** Functional  
**Description:** This test case verifies that selecting the "Lowest Price" sorting option reorders the hotel search results, displaying hotels from the lowest to the highest price.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Click on the "Sort by: Our top picks" dropdown.
4. Click on the "Price (Lowest Price)" option.  

**Expected Behavior:**
- The hotel search results are reordered, displaying hotels from the lowest to the highest price.
--- 
### IA  
#### Negative Test Cases:
##### Title: Verify That Sorting Preferences Persist After Session Timeout or Browser Reopening
**Description:** This test case verifies whether the selected sorting preferences (e.g., Price: Low to High, Best Reviewed, Distance) remain applied after a session timeout or when the browser is closed and reopened.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Click on the "Sort by: Our top picks" dropdown.
4. Click on the "Price (Lowest Price)" option.  

**Expected Behavior:** 
- The sorting preference should persist when the user reopens the browser or logs back in.
---
#### Edge Cases:
##### Title: Verify 'Lowest Price' Sorting and Ensure Displayed Prices Accurately Include Taxes and Fees
**Description:** This test case verifies that when the "Lowest Price" sorting option is applied, hotels are displayed in ascending order based on total cost, ensuring that all displayed prices accurately include applicable taxes and fees.  
**Requirements:**  
- Navigate to page: Booking.com.  

#### Steps:
1. Enter “New York” in the search filter "Where are you going?"
2. Click on the “Search” button.
3. Click on the "Sort by: Our top picks" dropdown.
4. Click on the "Price (Lowest Price)" option.
5. Click on a few hotel listings and check the breakdown of the total price.  

**Expected Behavior:**
- Hotels should be sorted correctly from lowest to highest price.
---
# User Story 2: Flight Booking Process (if available in your region)

### test case 1: Verify return date selection when searching for a round-trip flight - [Automated](#tags)
**Testing Type**: Functional  
**Description**: This test case verifies that selecting the round-trip option enables the return date selection, allowing users to choose both departure and return dates when booking a flight.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Click on the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter an origin and destination airport (e.g., Buenos Aires, Argentina to Brasilia (BSB)).  
4. Click on the date selection (e.g., departure: April 20, 2025, return: April 21, 2025).  
5. Click on the Return selection.  

**Expected Behavior**:
- When the "Round-trip" option is selected, the "Return Date" field is enabled, allowing users to choose a return date along with the departure date.

---

### Negative Test Case:
**Title**: Verify the system prevents search without a return date for round-trip flights  
**Description**: This test case verifies that the system prevents users from searching for round-trip flights without specifying a return date, ensuring that the search flow is consistent and complete.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Click on the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter an origin and destination airport (e.g., Buenos Aires, Argentina to Brasilia (BSB)).  
4. Click on the date selection (e.g., departure: April 20, 2025, return: April 21, 2025).  
5. Leave the return date field empty or attempt to skip it.  

**Expected Behavior**: 
- The system should prevent the search from proceeding when the return date for a round-trip flight is not provided.

---

### Edge Case:
**Title**: Verify system handling of extremely long trip durations (e.g., 1-year return)  
**Description**: This test case verifies that the system can handle and respond appropriately to searches involving extremely long travel durations, such as a 1-year return date.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Click on the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter an origin and destination airport (e.g., Buenos Aires, Argentina to Brasilia (BSB)).  
4. Click on the date selection (e.g., departure: April 20, 2025, return: April 21, 2025).  
5. Select a departure date (e.g., Jan 1, 2025).  
6. Set the return date to a date 1 year later (e.g., Jan 1, 2026).  

**Expected Behavior**: 
- The system should handle extremely long trip durations, ensuring that no errors or unexpected behavior occur when selecting such a long return date.

---

### Test Case 2: Verify that all available round-trip flights are displayed in the flight results list [Automated](#tags)
**Testing Type**: Functional  
**Description**: This test case verifies that selecting a departure and destination location displays the list of available flights for the chosen route.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Click on the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter an origin and destination airport (e.g., Buenos Aires, Argentina to Brasilia (BSB)).  
4. Click on the date selection (e.g., departure: April 20, 2025, return: April 21, 2025).  
5. Click on the search magnifying glass icon.  

**Expected Behavior**: 
- A list of available round-trip flights is displayed in the flight search results.

---

### Positive Scenario:
**Title**: Verify that flight results match the applied filters (e.g., airlines, stops, duration)  
**Description**: This test case verifies that the flight search results accurately reflect the filters applied, including airlines, stops, and flight duration, ensuring that only flights matching the user's selection are displayed.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Click on the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter an origin and destination airport (e.g., Buenos Aires, Argentina to Brasilia (BSB)).  
4. Click on the date selection (e.g., departure: April 20, 2025, return: April 21, 2025).  
5. Apply the following filters:  
6. Click the Search button.
7. 
**Expected Behavior**: 
- All flights listed should meet the filter criteria (e.g., flights should be within the selected duration range).

---

### Negative Test Case:
**Title**: Verify that layover options appear when selecting routes without direct flights  
**Description**: This test case verifies that when users select routes that do not have direct flights, the system correctly displays layover options, including details like the layover city and duration.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Click on the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter an origin and destination airport (e.g., Buenos Aires, Argentina to Brasilia (BSB)).  
4. Click on the date selection (e.g., departure: April 20, 2025, return: April 21, 2025).  
5. Choose a route that does not have a direct flight (e.g., Non-stop is unselected or 1 Stop is selected).  
6. Click the Search button.  
7. Review the displayed flight results.  
8. For each result, verify that layover details are provided, including:
- The layover city.
- The layover duration.
- Any relevant layover details (e.g., long layover or short layover).

**Expected Behavior**: 
- If no layover information is displayed for routes requiring one, it indicates a potential issue with
---
## IA

### Positive Scenario:  
**Title**: Verify that the system processes future check-in and check-out dates (e.g., 6 months ahead)  
**Testing Type**: Functional  
**Description**: This test case verifies that the system allows users to search for hotels with check-in and check-out dates set up to 6 months in advance, ensuring the system can process future dates correctly.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Go to the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Select a check-in date that is 6 months in the future (e.g., if today is March 31, 2025, select September 30, 2025).  
4. Select a check-out date that is also 6 months ahead (e.g., October 7, 2025).  

**Expected Behavior**: 
- The system should allow users to select future check-in and check-out dates, even if they are 6 months ahead.

---

### Edge Case:  
**Title**: Verify system behavior when entering a short duration (e.g., same-day check-in and check-out)  
**Description**: This test case verifies how the system behaves when the user enters a short duration for their hotel stay, ensuring that the system handles bookings with a duration that may be less than typical or require special handling (e.g., 1-night stay).  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Go to the "Flights" tab.  
2. Select the "Round-trip" option.  
3. Enter a destination city (e.g., Paris).  
4. Select a check-in date (e.g., April 1, 2025).  
5. Select a check-out date that reflects a short duration, such as 1 night (e.g., check-out on April 2, 2025).  
6. Click on the Search icon.  

**Expected Behavior**: 
- The system should allow bookings for short durations, such as 1 night or other short stays.

---

### Test Case 4:  Verify that a reservation summary with details is displayed when completing the flight payment  
**Testing Type**: Functional  
**Description**: This test case verifies that, after selecting a flight and proceeding to the payment process, the system displays a summary with booking information, including flight details, total price, taxes, and passenger information.  
**Requirements**:  
- Navigate to page: Booking.com.  

#### Steps:
1. Go to the "Flights" section on Booking.com.  
2. Select the "Round-trip" or "One-way" option.  
3. Enter the origin and destination airports (e.g., Cochabamba, Bolivia to Santa Cruz, Bolivia).  
4. Select departure and return dates (if applicable).  
5. Specify the number of passengers and flight class (optional).  
6. Click on the search magnifying glass icon.  
7. Choose a one-way flight and, if applicable, a return flight.  
8. Click on the 'View Deal' button.  
9. Click "Continue" to proceed to checkout.  

**Expected Behavior**: 
- The system should display a reservation summary with all essential details, including flight information, and confirm that the total price, taxes, and additional fees are clearly displayed.

---
## IA
### Positive Scenario:  
**Title**: Verify that the booking summary updates when additional services (e.g., extra nights, flight upgrades, amenities) are added  

---
### Negative Test Case:  
**Title**: Verify that the system prevents proceeding to the next step when canceling a booking halfway through the checkout process without confirmation

---
### Edge Case:  
**Title**: Verify checkout process for edge cases, such as booking an extremely long stay (e.g., 365 days), and ensure the summary handles the extended duration

---
# User Story 3: Hotel Details & Amenities Verification

## Test Case 1: Verify that the hotel details page displays all relevant information

### **Testing Type:** Functional
**Description**:
This test case verifies that the hotel page presents key information, including the hotel name, location, and star rating, to help users make an informed decision.

**Requirements:**
- Navigate to page: Booking.com.

### Steps:
1. Enter "New York" in the search bar "Where are you going?"
2. Select check-in date and check-out dates (e.g., Sat, April 11 - Sat, April 12).
3. Specify the number of guests and rooms (optional).
4. Click the "Search" button.
5. Go to the "Filter by" section.
6. Scroll down to the “Property Type“ section.
7. Select the option (e.g., "Hotels").
8. Select any hotel from the list of results.

### Expected Behavior:
- The hotel name should be displayed at the top of the details page.
---
## IA

### Positive Scenario
**Title**:Verify That the Hotel Listing Accurately Displays the Selected Hotel’s Details, Including Images, Map, and Description**

**Description:**
The hotel details page displays the selected hotel's information, including images, map, and description.

**Requirements:**
- Navigate to page: Booking.com.
- Search for and select a hotel from the search results.

### Steps:
1. Select a hotel from the search results.
2. Scroll down to the photo section of the hotel on the details page.

**Expected Behavior:**
- The hotel details page should display all relevant images, properly categorized.
- The map should show the hotel’s location with the marker placed correctly at the hotel's position.

---

## **Negative Test Cases**

**Title**: Verify That the Hotel Listing Page Does Not Load When Offline and Displays an Appropriate Offline Message**

**Description:**
This test case ensures that the hotel listing page does not load when the device is offline and that an appropriate offline message is displayed.

**Requirements:**
- Navigate to page: Booking.com.
- Access the hotel search page without an internet connection.

### Steps:
1. Disconnect the device from Wi-Fi or disable mobile data to make the device offline.

**Expected Behavior:**
- The hotel listing page should not load when the device is offline.
---

### Test Case 2: Verify that the hotel page displays information, such as the hotel name, location, and star rating**

**Testing Type:** Functional

**Description:**
This test case is to verify that the hotel page displays information, such as the hotel name, location, and star rating, to help the user make an informed decision.

**Requirements:**
- Navigate to page: Booking.com.

### Steps:
1. Enter "New York" in the search bar "Where are you going?"
2. Select your check-in dates and check-out dates (e.g., April 11 - April 12).
3. Specify the number of guests and rooms (optional).
4. Click the "Search" button.
5. Go to the "Filter by" section.
6. Select the option (e.g., "Hotels").
7. Select any hotel listed in the search results.

**Expected Behavior:**
- When a user selects a hotel from the search results, they should be redirected to the hotel details page.

---
## IA
### **Positive Scenarios**

**Title**: Verify That the Hotel's Location on the Map (if available) Accurately Reflects Its Correct Geographic Position**
**Description:**
This test case ensures that the hotel's location on the map on the details page is accurate and reflects the hotel’s correct geographic position.

**Requirements:**
- Navigate to page: Booking.com.
- Search for and select a hotel with a visible map on the details page.

### Steps:
1. Open the hotel details page.
2. Scroll to the map section where the hotel’s location is displayed.

**Expected Behavior:**
- The hotel’s location on the map should match the hotel's actual address.
---

## **Negative Test Cases**

**Title**:Verify That the Hotel Name, Location, and Star Rating Are Consistent with the Search Results (e.g., No Mismatch Between Rating and Hotel Description)**

**Description:**
This test case ensures that the hotel name, location, and star rating on the details page match the information presented in the search results.

**Requirements:**
- Navigate to page: Booking.com.
- Compare the hotel name, location, and star rating with the information shown in the search results.

### Steps:
1. Open the hotel details page.

 **Expected Behavior:**
- The hotel name, location, and star rating on the details page should match the information displayed in the search results.

---

### Test Case 3: Verify that the hotel details page displays a photo gallery showcasing images of the hotel
**Testing type:** Funcional  
**Description:** This test case validates that the hotel details page includes a photo gallery that users can browse, allowing them to view different images of the hotel and its facilities.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel that has a photo gallery.

### Steps:
1. Scroll down to the hotel's photos section on the details page.
2. Click on the '+## photos' field.

### Expected Behavior:
- The hotel details page should display a photo gallery featuring images of the hotel, including its rooms, amenities, and other key features.

---
### IA 
#### Positive Scenarios:
**Title**:Verify that navigation within the hotel gallery works using keyboard shortcuts
**Testing Type:** Functional  
**Description:** This test case ensures that users can navigate through the hotel photo gallery on the details page using keyboard shortcuts, such as the arrow keys to move between images.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel with a visible photo gallery.

### Steps:
1. Scroll to the photo gallery section.
2. Use the left and right arrow keys on the keyboard to navigate between images.

### Expected Behavior:
- Navigation within the photo gallery should work using the left and right arrow keys.

---

## Negative Test Cases:
**Title**:Verify gallery navigation performance under slow network conditions
**Testing Type:** Negative  
**Description:** This test case ensures that the photo gallery navigation on the hotel details page performs correctly under slow network conditions.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel with a visible photo gallery.
- Simulate or use a slow network connection.

### Steps:
1. Open the hotel details page with the photo gallery.
2. Scroll to the photo gallery section.

### Expected Behavior:
- Gallery navigation should remain functional, albeit with some delay due to the slow network. Images should load progressively.

---

## Edge Cases:
**Title**:Verify gallery performance across different network speeds
**Testing Type:** Edge Case  
**Description:** This test case ensures that the photo gallery on the hotel details page functions correctly across various network speeds (4G, 3G, Wi-Fi), and that images load progressively without disrupting gallery functionality.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel with a visible photo gallery.
- Simulate or use different types of network connections (4G, 3G, Wi-Fi).

### Steps:
1. Open the hotel details page with the photo gallery.
2. Simulate or switch between different network speeds (4G, 3G, Wi-Fi).

### Expected Behavior:
- The photo gallery should function smoothly across all network speeds. Images should load progressively, starting with a lower-quality version and then updating to a higher-quality version as the image fully loads.

---

### Test Case 4: Verify that the hotel page displays a comprehensive list of hotel services and amenities.
**Testing type:** Functional  
**Description:** This test case verifies that the hotel's details page displays available amenities, such as Wi-Fi, parking, pool, and other services offered by the hotel.

### Requirements:
- Navigate to page: Booking.com.
- A hotel should be selected from the search results.

### Steps:
1. Scroll down to the "Most popular facilities" section.

### Expected Behavior:
- The hotel page should display a visible list of services and amenities, including Wi-Fi, parking, pool, breakfast, and fitness center, with clear descriptions or icons for each.

---
### IA 
#### Positive Scenarios:

**Title**:Verify that amenities are categorized
**Testing Type:** Functional  
**Description:** This test case verifies that the amenities on the hotel details page are organized into clearly defined categories (e.g., "Room Amenities," "Hotel Facilities," "Entertainment & Activities") to enhance user navigation and clarity.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel with a detailed list of amenities.

### Steps:
1. Scroll to the "Most Popular Facilities" section.

### Expected Behavior:
- Amenities should be well-organized into categories. Each category should be labeled, and the specific amenities should be grouped accordingly.

---

### Test Cases 5: Verify that the hotel page displays user reviews and ratings.
**Testing type:** Functional  
**Description:** This test case verifies that a hotel's page displays reviews and ratings from previous guests.

### Requirements:
- Navigate to page: Booking.com.
- A hotel should be selected from the search results.

### Steps:
1. Click on the “Guest Reviews” tab.

### Expected Behavior:
The user reviews and ratings should be displayed on the hotel page, with clear ratings, review content, and the total number of reviews visible.

### IA  
#### Positive Scenarios:
**Title**: Verify that reviews are sorted by default
**Testing Type:** Functional  
**Description:** This test case ensures that when viewing a hotel’s reviews on the details page, the reviews are automatically sorted to display the most recent ones first.

### Requirements:
- Navigate to: Booking.com.
- Search for and select a hotel with user reviews or ratings.

### Steps:
1. Go to the hotel details page.
2. Click on the "Guest reviews" tab.

### Expected Behavior:
- Reviews should be sorted by default, with the most recent reviews appearing first. No filters should be required to view the most recent reviews, as this should be the default order on the hotel's details page.

---

## Test Case 6: Verify that the hotel details page displays a map with its location
**Testing type:** Functional  
**Description:** This test case verifies that the hotel details page displays an interactive map with the hotel's exact location, enabling users to view the hotel's location before making a booking.

### Requirements:
- Navigate to page: Booking.com.
- A hotel should be selected from the search results.

### Steps:
1. Click on the "Show on map" button.

### Expected Behavior:
- The hotel details page should display a map showing the hotel's current location.

### IA  
#### Positive Scenarios:
**Title**: Verify that the map displays a marker or pin representing the hotel’s exact location
**Testing Type:** Functional  
**Description:** This test case ensures that when a hotel’s details page is viewed, the map displays a marker or pin representing the hotel’s exact location.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel with location information.

### Steps:
1. Go to the hotel details page.
2. Scroll down to the map section of the hotel details page.
3. Click on the marker or pin.

### Expected Behavior:
- The map should show a visible marker or pin at the exact location of the hotel.

---

## Negative Test Cases:
**Title**:Verify the map is static, with no zooming or panning, making it non-interactive
**Testing Type:** Negative  
**Description:** This test case ensures that the map on the hotel details page is static, meaning it does not allow zooming or panning.

### Requirements:
- Navigate to page: Booking.com.
- Find and select a hotel with a map section on its details page.

### Steps:
1. Go to the hotel details page.
2. Scroll to the map section.
3. Try zooming in or out on the map.
4. Try panning or moving the map view.

### Expected Behavior:
- The map remains static with no interaction. Zooming and panning should be disabled, and the map should only display a fixed image of the hotel's location.

---

## Edge Cases:
**Title**:Verify the hotel's location remains accurate and visible when zoomed in to the maximum level (e.g., Street View) on the map
**Testing Type:** Edge Case  
**Description:** This test case ensures that when zooming in to the highest level (e.g., street view) on the map on the hotel details page, the hotel's location stays accurate and visible.

### Requirements:
- Navigate to page: Booking.com.
- Search for and select a hotel with location information and an interactive map.

### Steps:
1. Go to the hotel details page.
2. Scroll to the map section.
3. Zoom in to the maximum level available.

### Expected Behavior:
- The hotel’s location should stay accurate, even at high zoom levels (such as Street View). The hotel marker or pin should remain visible and correctly aligned with the hotel’s exact location, without shifting or disappearing.