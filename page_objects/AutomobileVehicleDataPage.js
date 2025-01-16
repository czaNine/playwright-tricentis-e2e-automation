import { testData } from '../data/TestData';

export default class AutomobileVehicleDataPage {
  constructor(page){
    this.page = page;
    this.baseURL = testData.siteData;
    this.elementAutomobileInsurance = page.locator("(//span[@id='selectedinsurance'])[1]");
    this.linkEnterVehicleData = page.locator("//a[@id='entervehicledata']");
    this.linkEnterInsurantData = page.locator("//a[@id='enterinsurantdata']");
    this.linkEnterProductData = page.locator("//a[@id='enterproductdata']");
    this.linkSelectPriceOption = page.locator("//a[@id='selectpriceoption']");
    this.linkSelectSendQuote = page.locator("//a[@id='sendquote']");
    this.listBoxMake = page.locator("//select[@id='make']");
    this.textBoxEnginePerformance = page.locator("//input[@id='engineperformance']");
    this.textBoxDateOfManufacture = page.locator("//input[@id='dateofmanufacture']");
    this.listBoxNumberOfSeats = page.locator("//select[@id='numberofseats']");
    this.listBoxFuelType = page.locator("//select[@id='fuel']");
    this.textBoxListPrice = page.locator("//input[@id='listprice']");
    this.textBoxLicensePlateNumber = page.locator("//input[@id='licenseplatenumber']");
    this.textBoxAnnualMileage = page.locator("//input[@id='annualmileage']");
    this.buttonNext = page.locator("//button[@id='nextenterinsurantdata']");
  }

  async validateAutomobileInsurancePage() {
    console.log("Validate Automobile Insurance Page");

    const elementAutomobileInsurance = this.elementAutomobileInsurance;
    await elementAutomobileInsurance.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateEnterVehicleDataTab() {
    console.log("Validate Enter Vehicle Data Tab");

    const linkEnterVehicleData = this.linkEnterVehicleData;
    await linkEnterVehicleData.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateEnterInsurantDataTab() {
    console.log("Validate Enter Insurant Data Tab");
    const linkEnterInsurantData = this.linkEnterInsurantData;
    await linkEnterInsurantData.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateEnterProductDataTab() {
    console.log("Validate Enter Product Data Tab");
    const linkEnterProductData = this.linkEnterProductData;
    await linkEnterProductData.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateSelectPriceOptionTab() {
    console.log("Validate Select Price Option Tab");
    const linkSelectPriceOption = this.linkSelectPriceOption;
    await linkSelectPriceOption.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateSendQuoteTab() {
    console.log("Validate Send Quote Tab");
    const linkSelectSendQuote = this.linkSelectSendQuote;
    await linkSelectSendQuote.waitFor({ state: 'visible', timeout: 15000 });
  }


  async populateMake(testData) {
    console.log("Populate Make");

    const listBoxMake = this.listBoxMake;
    await listBoxMake.waitFor({ state: 'visible', timeout: 15000 });
    await listBoxMake.selectOption({ label:  testData.make });
  }
  
  async populateEnginePerformance(testData) {
    console.log("Populate Engine Performance");

    const textBoxEnginePerformance = this.textBoxEnginePerformance;
    await textBoxEnginePerformance.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxEnginePerformance.fill(testData.enginePerformance);
  }

  async populateDateOfManufacture(testData) {
    console.log("Populate Date of Manufacture");

    const textBoxDateOfManufacture = this.textBoxDateOfManufacture;
    await textBoxDateOfManufacture.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxDateOfManufacture.fill(testData.dateOfManufacture);
  }

  async populateNumberOfSeats(testData) {
    console.log("Populate Number of Seats");

    const listBoxNumberOfSeats = this.listBoxNumberOfSeats;
    await listBoxNumberOfSeats.waitFor({ state: 'visible', timeout: 15000 });
    await listBoxNumberOfSeats.selectOption({ label: testData.numberOfSeats });
  }

  async populateFuelType(testData) {
    console.log("Populate Fuel Type");

    const listBoxFuelType = this.listBoxFuelType;
    await listBoxFuelType.waitFor({ state: 'visible', timeout: 15000 });
    await listBoxFuelType.selectOption({ label: testData.fuelType });
  }
  
  async populateListPrice(testData) {
    console.log("Populate List Price");

    const textBoxListPrice = this.textBoxListPrice;
    await textBoxListPrice.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxListPrice.fill(testData.listPrice);
  }

  async populateLicensePlateNumber(testData) {
    console.log("Populate License Plate Number");

    const textBoxLicensePlateNumber = this.textBoxLicensePlateNumber;
    await textBoxLicensePlateNumber.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxLicensePlateNumber.fill(testData.licensePlateNumber);;
  }

  async populateAnnualMileage(testData) {
    console.log("Populate Annual Mileage");

    const textBoxAnnualMileage = this.textBoxAnnualMileage;
    await textBoxAnnualMileage.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxAnnualMileage.fill(testData.annualMileage);
  }

  async clickNext() {
    console.log("Click Next");

    await this.buttonNext.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonNext.click();
  }
}