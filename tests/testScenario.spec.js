import { test, expect } from '@playwright/test';
import { testData } from '../data/TestData';
import { motorcycleTestData } from '../data/MotorcycleTestData';
import HomePage from '../page_objects/HomePage';
import AutomobileVehicleDataPage from '../page_objects/AutomobileVehicleDataPage';
import AutomobileProductDataPage from '../page_objects/AutomobileProductDataPage';
import AutomobileInsurantDataPage from '../page_objects/AutomobileInsurantDataPage';
import AutomobileSelectPriceOptionPage from '../page_objects/AutomobileSelectPriceOptionPage';
import AutomobileSendQuotePage from '../page_objects/AutomobileSendQuotePage';
import MotorcycleVehicleDataPage from '../page_objects/MotorcycleVehicleDataPage';
import MotorcycleInsurantDataPage from '../page_objects/MotorcycleInsurantDataPage';
import MotorcycleProductDataPage from '../page_objects/MotorcycleProductDataPage';
import MotorcycleSelectPriceOptionPage from '../page_objects/MotorcycleSelectPriceOptionPage';
import MotorcycleSendQuotePage from '../page_objects/MotorcycleSendQuotePage';

test.describe("Tricentis Vehicle Insurance App - Automobile", () => {
  const baseURL = testData.siteData;

  test.beforeEach(async ({page}) => {
    console.log('Navigate to Open URL');
    await page.goto(baseURL);
    await page.waitForLoadState('networkidle');
		await expect(page).toHaveTitle("Tricentis Vehicle Insurance");
  });
  
  test("Happy Path", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(page).toHaveURL(`${baseURL}`);
    await homePage.validateAutomobileTab();
    await expect(homePage.automobileTab).toBeVisible();
    await homePage.validateTruckTab();
    await expect(homePage.truckTab).toBeVisible();
    await homePage.validateMotorcycleTab();
    await expect(homePage.motorcycleTab).toBeVisible();
    await homePage.validateCamperTab();
    await expect(homePage.camperTab).toBeVisible();
    await homePage.clickAutomobileTab();

    const vehicleDataPage = new AutomobileVehicleDataPage(page);
    await vehicleDataPage.validateAutomobileInsurancePage();
    await expect(vehicleDataPage.elementAutomobileInsurance).toBeVisible();
    await vehicleDataPage.validateEnterVehicleDataTab();
    await expect(vehicleDataPage.linkEnterVehicleData).toBeVisible();
    await vehicleDataPage.validateEnterInsurantDataTab();
    await expect(vehicleDataPage.linkEnterInsurantData).toBeVisible();
    await vehicleDataPage.validateEnterProductDataTab();
    await expect(vehicleDataPage.linkEnterProductData).toBeVisible();
    await vehicleDataPage.validateSelectPriceOptionTab();
    await expect(vehicleDataPage.linkSelectPriceOption).toBeVisible();
    await vehicleDataPage.validateSendQuoteTab();
    await expect(vehicleDataPage.linkSelectSendQuote).toBeVisible();
    await vehicleDataPage.populateMake(testData);
    await vehicleDataPage.populateEnginePerformance(testData);
    await vehicleDataPage.populateDateOfManufacture(testData);
    await vehicleDataPage.populateNumberOfSeats(testData);
    await vehicleDataPage.populateFuelType(testData);
    await vehicleDataPage.populateListPrice(testData);
    await vehicleDataPage.populateLicensePlateNumber(testData);
    await vehicleDataPage.populateAnnualMileage(testData);
    await vehicleDataPage.clickNext();

    const insurantDataPage = new AutomobileInsurantDataPage(page);
    await insurantDataPage.populateEnterInsurantDataForm(testData);
    await insurantDataPage.clickNext();

    const productDataPage = new AutomobileProductDataPage(page);
    await productDataPage.populateEnterProductDataForm(testData);
    await productDataPage.clickNext();

    const selectPriceOptionPage = new AutomobileSelectPriceOptionPage(page);
    await selectPriceOptionPage.selectPriceOption();
    await selectPriceOptionPage.clickNext();

    const sendQuotePage = new AutomobileSendQuotePage(page);
    await sendQuotePage.populateSendQuoteForm(testData);
    await sendQuotePage.clickSend();
    await sendQuotePage.validateEmailSendingSuccess();
    await expect(sendQuotePage.sendingEmailSuccess).toHaveText('Sending e-mail success!');
    await sendQuotePage.clickOKButton();
  });

  test("Should not proceed to 'Select Pricing Option' if required fields are missing", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(page).toHaveURL(`${baseURL}`);
    await homePage.validateAutomobileTab();
    await expect(homePage.automobileTab).toBeVisible();
    await homePage.validateTruckTab();
    await expect(homePage.truckTab).toBeVisible();
    await homePage.validateMotorcycleTab();
    await expect(homePage.motorcycleTab).toBeVisible();
    await homePage.validateCamperTab();
    await expect(homePage.camperTab).toBeVisible();
    await homePage.clickAutomobileTab();

    const vehicleDataPage = new AutomobileVehicleDataPage(page);
    await vehicleDataPage.validateAutomobileInsurancePage();
    await expect(vehicleDataPage.elementAutomobileInsurance).toBeVisible();
    await vehicleDataPage.validateEnterVehicleDataTab();
    await expect(vehicleDataPage.linkEnterVehicleData).toBeVisible();
    await vehicleDataPage.validateEnterInsurantDataTab();
    await expect(vehicleDataPage.linkEnterInsurantData).toBeVisible();
    await vehicleDataPage.validateEnterProductDataTab();
    await expect(vehicleDataPage.linkEnterProductData).toBeVisible();
    await vehicleDataPage.validateSelectPriceOptionTab();
    await expect(vehicleDataPage.linkSelectPriceOption).toBeVisible();
    await vehicleDataPage.validateSendQuoteTab();
    await expect(vehicleDataPage.linkSelectSendQuote).toBeVisible();
    await vehicleDataPage.populateMake(testData);
    await vehicleDataPage.populateEnginePerformance(testData);
    await vehicleDataPage.populateDateOfManufacture(testData);
    await vehicleDataPage.populateNumberOfSeats(testData);
    await vehicleDataPage.populateFuelType(testData);
    await vehicleDataPage.populateListPrice(testData);
    await vehicleDataPage.populateLicensePlateNumber(testData);
    //removed annual mileage input
    await vehicleDataPage.clickNext();

    const insurantDataPage = new AutomobileInsurantDataPage(page);
    await insurantDataPage.populateEnterInsurantDataForm(testData);
    await insurantDataPage.clickNext();

    const productDataPage = new AutomobileProductDataPage(page);
    await productDataPage.populateEnterProductDataForm(testData);
    await productDataPage.clickNext();

    const selectPriceOptionPage = new AutomobileSelectPriceOptionPage(page);
    await selectPriceOptionPage.validateIncompleteFieldInputMessage();
    await expect(selectPriceOptionPage.incompleteFieldMessage).toHaveText('Please, complete the first three steps to see the price table.');
  });

  test.afterEach(async ({ page }) => {
    console.log("Close Browser");

    await page.close();
  });

});

test.describe("Tricentis Vehicle Insurance App - Motorcycle", () => {
  const baseURL = testData.siteData;

  test.beforeEach(async ({page}) => {
    console.log('Navigate to Open URL');
    await page.goto(baseURL);
    await page.waitForLoadState('networkidle');
		await expect(page).toHaveTitle("Tricentis Vehicle Insurance");
  });

  test("Happy Path", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(page).toHaveURL(`${baseURL}`);
    await homePage.validateAutomobileTab();
    await expect(homePage.automobileTab).toBeVisible();
    await homePage.validateTruckTab();
    await expect(homePage.truckTab).toBeVisible();
    await homePage.validateMotorcycleTab();
    await expect(homePage.motorcycleTab).toBeVisible();
    await homePage.validateCamperTab();
    await expect(homePage.camperTab).toBeVisible();
    await homePage.clickMotorcycleTab();

    const vehicleDataPage = new MotorcycleVehicleDataPage(page);
    await vehicleDataPage.validateMotorcycleInsurancePage();
    await expect(vehicleDataPage.elementMotorcycleInsurance).toBeVisible();
    await vehicleDataPage.validateEnterVehicleDataTab();
    await expect(vehicleDataPage.linkEnterVehicleData).toBeVisible();
    await vehicleDataPage.validateEnterInsurantDataTab();
    await expect(vehicleDataPage.linkEnterInsurantData).toBeVisible();
    await vehicleDataPage.validateEnterProductDataTab();
    await expect(vehicleDataPage.linkEnterProductData).toBeVisible();
    await vehicleDataPage.validateSelectPriceOptionTab();
    await expect(vehicleDataPage.linkSelectPriceOption).toBeVisible();
    await vehicleDataPage.validateSendQuoteTab();
    await expect(vehicleDataPage.linkSelectSendQuote).toBeVisible();
    await vehicleDataPage.populateMake(motorcycleTestData);
    await vehicleDataPage.populateModel(motorcycleTestData);
    await vehicleDataPage.populateCylinderCapacity(motorcycleTestData);
    await vehicleDataPage.populateEnginePerformance(motorcycleTestData);
    await vehicleDataPage.populateDateOfManufacture(motorcycleTestData);
    await vehicleDataPage.populateNumberOfSeats(motorcycleTestData);
    await vehicleDataPage.populateListPrice(motorcycleTestData);
    await vehicleDataPage.populateAnnualMileage(motorcycleTestData);
    await vehicleDataPage.clickNext();

    const insurantDataPage = new MotorcycleInsurantDataPage(page);
    await insurantDataPage.populateEnterInsurantDataForm(motorcycleTestData);
    await insurantDataPage.clickNext();

    const productDataPage = new MotorcycleProductDataPage(page);
    await productDataPage.populateStartDate(motorcycleTestData);
    await productDataPage.populateInsuranceSum(motorcycleTestData);
    await productDataPage.populateDamageInsurance(motorcycleTestData);
    await productDataPage.populateEuroProtection();
    await productDataPage.clickNext();

    const selectPriceOptionPage = new MotorcycleSelectPriceOptionPage(page);
    await selectPriceOptionPage.selectPriceOption();
    await selectPriceOptionPage.clickNext();

    const sendQuotePage = new MotorcycleSendQuotePage(page);
    await sendQuotePage.populateEmail(motorcycleTestData);
    await sendQuotePage.populateUsername(motorcycleTestData);
    await sendQuotePage.populatePassword(motorcycleTestData);
    await sendQuotePage.populateConfirmPassword(motorcycleTestData);
    await sendQuotePage.clickSend();
    await sendQuotePage.validateEmailSendingSuccess();
    await expect(sendQuotePage.sendingEmailSuccess).toHaveText('Sending e-mail success!');
    await sendQuotePage.clickOKButton();
  });

  test("Should not proceed to 'Select Pricing Option' if required fields are missing", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(page).toHaveURL(`${baseURL}`);
    await homePage.validateAutomobileTab();
    await expect(homePage.automobileTab).toBeVisible();
    await homePage.validateTruckTab();
    await expect(homePage.truckTab).toBeVisible();
    await homePage.validateMotorcycleTab();
    await expect(homePage.motorcycleTab).toBeVisible();
    await homePage.validateCamperTab();
    await expect(homePage.camperTab).toBeVisible();
    await homePage.clickMotorcycleTab();

    const vehicleDataPage = new MotorcycleVehicleDataPage(page);
    await vehicleDataPage.validateMotorcycleInsurancePage();
    await expect(vehicleDataPage.elementMotorcycleInsurance).toBeVisible();
    await vehicleDataPage.validateEnterVehicleDataTab();
    await expect(vehicleDataPage.linkEnterVehicleData).toBeVisible();
    await vehicleDataPage.validateEnterInsurantDataTab();
    await expect(vehicleDataPage.linkEnterInsurantData).toBeVisible();
    await vehicleDataPage.validateEnterProductDataTab();
    await expect(vehicleDataPage.linkEnterProductData).toBeVisible();
    await vehicleDataPage.validateSelectPriceOptionTab();
    await expect(vehicleDataPage.linkSelectPriceOption).toBeVisible();
    await vehicleDataPage.validateSendQuoteTab();
    await expect(vehicleDataPage.linkSelectSendQuote).toBeVisible();
    await vehicleDataPage.populateMake(motorcycleTestData);
    await vehicleDataPage.populateModel(motorcycleTestData);
    await vehicleDataPage.populateCylinderCapacity(motorcycleTestData);
    await vehicleDataPage.populateEnginePerformance(motorcycleTestData);
    await vehicleDataPage.populateDateOfManufacture(motorcycleTestData);
    await vehicleDataPage.populateNumberOfSeats(motorcycleTestData);
    await vehicleDataPage.populateListPrice(motorcycleTestData);
    await vehicleDataPage.populateAnnualMileage(motorcycleTestData);
    await vehicleDataPage.clickNext();

    const insurantDataPage = new MotorcycleInsurantDataPage(page);
    await insurantDataPage.populateEnterInsurantDataForm(motorcycleTestData);
    await insurantDataPage.clickNext();

    const productDataPage = new MotorcycleProductDataPage(page);
    await productDataPage.populateStartDate(motorcycleTestData);
    await productDataPage.populateInsuranceSum(motorcycleTestData);
    //removed damage insurance keyboard input
    await productDataPage.populateEuroProtection();
    await productDataPage.clickNext();

    const selectPriceOptionPage = new AutomobileSelectPriceOptionPage(page);
    await selectPriceOptionPage.validateIncompleteFieldInputMessage();
    await expect(selectPriceOptionPage.incompleteFieldMessage).toHaveText('Please, complete the first three steps to see the price table.');
  });

  test.afterEach(async ({ page }) => {
    console.log("Close Browser");

    await page.close();
  });
});