# Playwright Automation Project

This project uses **Playwright** to automate testing on the website [Booking.com](https://www.booking.com).  
The steps to set up the environment and run the tests are detailed below.  

---

## 🟢 **Clone Repository**

Clone the repository from GitHub:  

```bash

https://github.com/AlvaroAvilaPerez/challenge-playwright.git

```
## 📦 Verify the installation Version Node

Ensure you have Node.js installed on your machine.
To verify the installation, run the following commands:

```bash
node -v
npm -v
```

## 📦 Install Dependencies
To install all project dependencies from package.json, run:

```bash
npm install
```

## 📋 Additional Requirements
Installing Browsers: After installing Playwright, make sure to install the necessary browsers by running:

```bash
npx playwright install
```

```bash
npm install -D allure-playwright@^3.2.1
```

## 🚀 Run Tests
To execute all tests, use the following command:

```bash
npx playwright test
```

## 🚀 Generate the Allure report:
Once the tests are complete, you can generate the Allure report using the following command:

```bash
npx allure generate --clean
```

## 🚀 Open the Allure report: 
Finally, open the generated report in your browser using the following command:

```bash
npx allure opene
```

Visual Studio Code Setup: If you're using Visual Studio Code, you can install the Playwright extension for additional support and useful features.

# Implementation of Self-Healing Locators, AI-Based Assertions, and Playwright Integration

The automation framework described here integrates key concepts such as self-healing locators and AI-based assertions, using Playwright for browser automation. The following explains where and why these concepts were applied, including the overall structure and development process.

## 1. Self-Healing Locators

The concept of **self-healing locators** aims to enhance the stability of automated tests. Locators are essential for identifying elements on a web page, but they can often change due to modifications in the user interface. Self-healing locators ensure that tests do not fail when the locator for an element changes.

### Implementation

**BasePage Class**: Methods were created to manage locators and ensure their robustness by attempting to identify elements even when their selectors may have changed.

The `BasePage` class contains the `findSelfHealingLocator` method, which checks whether the provided selector is a string or an array. If it is an array, the method tries multiple selectors until it finds one that matches. This way, if one locator is broken, the test can continue using an alternative locator.

### Why Self-Healing Locators?

- **Improved Stability**: Automatically handles changes in UI elements (e.g., changes in class names or modifications in structure) without causing tests to fail.
- **Reduced Maintenance**: Decreases the need for frequent updates in tests when UI elements are modified.

---

## 2. AI-Based Assertions

**AI-based assertions** enhance the robustness of the test suite by allowing assertions to adapt to dynamic content or variables that may change during execution. The integration of AI in assertions enables more flexible validation, such as checking if elements contain expected text even when the UI content changes or behaves unpredictably.

### Implementation

**Custom Assertion Functions**: The functions `assertContainsAnyText` and `assertContainsText` were implemented to provide smarter checks during test execution. These functions verify whether the actual text contains one or more expected values, allowing flexibility in UI validation.

### Why AI-Based Assertions?

- **Dynamic UI Handling**: AI-based assertions allow the framework to intelligently validate text or content, even when minor changes occur in the UI, preventing test failures.
- **Flexibility**: Using functions like `assertContainsAnyText` accommodates variations in displayed text during test execution, ensuring that tests can adapt to content that may differ slightly between runs.

---