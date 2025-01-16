import { motorcycleTestData} from '../data/MotorcycleTestData';
import { timeout } from '../playwright.config';

export default class MotorcycleVehicleDataPage{
  constructor(page){
    this.page = page;
    this.elementMotorcycleInsurance = page.locator("//span[@id='selectedinsurance']");
    this.linkEnterVehicleData = page.locator("//a[@id='entervehicledata']");
    this.linkEnterInsurantData = page.locator("//a[@id='enterinsurantdata']");
    this.linkEnterProductData = page.locator("//a[@id='enterproductdata']");
    this.linkSelectPriceOption = page.locator("//a[@id='selectpriceoption']");
    this.linkSelectSendQuote = page.locator("//a[@id='sendquote']");
    this.listBoxMake = page.locator("//select[@id='make']");
    this.listBoxModel = page.locator("//select[@id='model']");
    this.textBoxCylinderCapacity = page.locator("//input[@id='cylindercapacity']");
    this.textBoxEnginePerformance = page.locator("//input[@id='engineperformance']");
    this.textBoxDateOfManufacture = page.locator("//input[@id='dateofmanufacture']");
    this.textBoxNumberOfSeats = page.locator("//select[@id='numberofseatsmotorcycle']");
    this.textBoxListPrice = page.locator("//input[@id='listprice']");
    this.textBoxAnnualMileage = page.locator("//input[@id='annualmileage']");
    this.buttonNext = page.locator("//button[@id='nextenterinsurantdata']");
  }

  async validateMotorcycleInsurancePage(){
    console.log("Validate Motorcycle Insurance Page");

    const elementMotorcycleInsurance = this.elementMotorcycleInsurance;
    await elementMotorcycleInsurance.waitFor({ state: 'visible', timeout: 15000 });
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

  async populateMake(motorcycleTestData) {
    console.log("Populate Make");

    const listBoxMake = this.listBoxMake;
    await listBoxMake.waitFor({ state: 'visible', timeout: 15000 });
    await listBoxMake.selectOption({ label:  motorcycleTestData.make });
  }

  async populateModel(motorcycleTestData){
    console.log("Populate Model");

    const listBoxModel = this.listBoxModel;
    await listBoxModel.waitFor({ state: 'visible', timeout: 15000 });
    await listBoxModel.selectOption({ label: motorcycleTestData.model });
  }

  async populateCylinderCapacity(motorcycleTestData){
    console.log("Populate Cylinder Capacity");

    const textBoxCylinderCapacity = this.textBoxCylinderCapacity;
    await textBoxCylinderCapacity.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxCylinderCapacity.fill(motorcycleTestData.cylinderCapacityText);
  }

  async populateEnginePerformance(motorcycleTestData){
    console.log("Populate Engine Performance");

    const textBoxEnginePerformance = this.textBoxEnginePerformance;
    await textBoxEnginePerformance.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxEnginePerformance.fill(motorcycleTestData.enginePerformance);
  }

  async populateDateOfManufacture(motorcycleTestData) {
    console.log("Populate Date of Manufacture");

    const textBoxDateOfManufacture = this.textBoxDateOfManufacture;
    await this.textBoxDateOfManufacture.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxDateOfManufacture.fill(motorcycleTestData.dateOfManufacture);
  }

  async populateNumberOfSeats(motorcycleTestData) {
    console.log("Populate Number of Seats");

    const listBoxNumberOfSeats = this.textBoxNumberOfSeats;
    await listBoxNumberOfSeats.waitFor({ state: 'visible', timeout: 15000 });
    await listBoxNumberOfSeats.selectOption({ label: motorcycleTestData.numberOfSeats });
  }

  async populateListPrice(motorcycleTestData) {
    console.log("Populate List Price");

    const textBoxListPrice = this.textBoxListPrice;
    await textBoxListPrice.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxListPrice.fill(motorcycleTestData.listPrice);
  }

  async populateAnnualMileage(motorcycleTestData) {
    console.log("Populate Annual Mileage");

    const textBoxAnnualMileage = this.textBoxAnnualMileage;
    await textBoxAnnualMileage.waitFor({ state: 'visible', timeout: 15000 });
    await textBoxAnnualMileage.fill(motorcycleTestData.annualMileage);
  }

  async clickNext() {
    console.log("Click Next");

    await this.buttonNext.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonNext.click();
  }
}