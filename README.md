Playwright Test Automation
==========================

This repository contains Playwright test automation scripts written in JavaScript. The primary purpose of this repository is to provide tests in the form of `.spec.js` files for automated browser testing.

Table of Contents
-----------------

-   Prerequisites
-   Installation
-   Running Tests
-   Test Structure
-   Contributing
-   License

Prerequisites
-------------

Before running the tests, ensure you have the following tools installed on your machine:

-   **Node.js** (v14 or later) - [Download Node.js](https://nodejs.org/)
-   **Playwright** - This will be automatically installed when you run `npm install`.

Installation
------------

To get started, clone this repository and install the dependencies:

bash
`git clone https://github.com/yourusername/playwright-test-automation.git
cd playwright-test-automation
npm install`

This will install Playwright and any other necessary dependencies for running the tests.

Running Tests
-------------

You can run the tests using the following command:

bash
`npx playwright test`

This will execute all the `.spec.js` files in the `tests` directory (or wherever your test files are located).

### Run Specific Test

If you only want to run a specific test, you can specify the test file like so:

bash
`npx playwright test tests/example.spec.js`

### Running Tests in Different Browsers

Playwright supports running tests in multiple browsers. You can specify which browser to run the tests in using the `--project` flag:

bash
`npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project=chromium`

### Running Tests Headlessly

If you'd prefer to run the tests in headless mode (without launching a browser window), use the `--headless` flag:

bash
`npx playwright test --headless`

Test Structure
--------------

The tests are organized into individual `.spec.js` files located in the `tests` directory (or whatever directory you use for your tests). These files are responsible for defining specific test cases and scenarios for your web application.

### Example Test File

`// example.spec.js
const { test, expect } = require('@playwright/test');

test('should visit the homepage', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});`

-   Each test file should use the `test` function provided by Playwright to define test scenarios.
-   The `expect` function is used for assertions to verify that the application behaves as expected.
