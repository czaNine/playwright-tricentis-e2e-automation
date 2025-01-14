import {test, expect} from '@playwright/test';
import {testData} from '../data/TestData';
import HomePage from '../page_objects/HomePage';
import AutomobileVehicleDataPage from '../page_objects/AutomobileVehicleDataPage';
import AutomobileProductDataPage from '../page_objects/AutomobileProductDataPage';
import AutomobileInsurantDataPage from '../page_objects/AutomobileInsurantDataPage';
import AutomobileSelectPriceOptionPage from '../page_objects/AutomobileSelectPriceOptionPage';
import AutomobileSendQuotePage from '../page_objects/AutomobileSendQuotePage';

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
