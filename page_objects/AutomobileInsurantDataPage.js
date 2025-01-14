import { testData } from "../data/TestData";

export default class AutomobileInsurantDataPage {
  constructor(page){
    this.page = page;
    this.baseURL =  testData.siteData;
    this.firstName = page.locator('//input[@id="firstname"]');
    this.lastName = page.locator('//input[@id="lastname"]');
    this.dateOfBirth = page.locator('//input[@id="birthdate"]');
    this.genderRadioButton = page.locator('//input[@id="gendermale"]/..');
    this.streetAddress = page.locator('//input[@id="streetaddress"]');
    this.countryListBox = page.locator('//select[@id="country"]');
    this.zipCode = page.locator('//input[@id="zipcode"]');
    this.city = page.locator('//input[@id="city"]');
    this.occupationListBox = page.locator('//select[@id="occupation"]');
    this.speedingCheckBox = page.locator('//input[@id="speeding"]/..');
    this.skyDivingCheckBox = page.locator('//input[@id="skydiving"]/..');
    this.nextButton = page.locator('//button[@id="nextenterproductdata"]');
  }

   async populateEnterInsurantDataForm(testData) {
    console.log("Populate Enter Insurant Data Form");
    await this.firstName.fill(testData.firstName);
    await this.lastName.fill(testData.lastName);
    await this.dateOfBirth.fill(testData.dateOfBirth);
    await this.genderRadioButton.click();
    await this.streetAddress.fill(testData.streetAddress);
    await this.countryListBox.selectOption({ label: testData.country });
    await this.zipCode.fill(testData.zipCode);
    await this.city.fill(testData.city);
    await this.occupationListBox.selectOption({ label: testData.occupation });
    await this.speedingCheckBox.check();
    await this.skyDivingCheckBox.check();
  }

  async clickNext() {
    console.log("Click Next");
    await this.nextButton.click();
  }
}