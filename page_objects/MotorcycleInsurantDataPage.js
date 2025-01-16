import { motorcycleTestData } from '../data/MotorcycleTestData';
import { timeout } from '../playwright.config';

export default class MotorcycleInsurantDataPage{
  constructor(page){
    this.page = page;
    this.firstName = page.locator('//input[@id="firstname"]');
    this.lastName = page.locator('//input[@id="lastname"]');
    this.dateOfBirth = page.locator('//input[@id="birthdate"]');
    this.genderRadioButton = page.locator('//input[@id="gendermale"]/..');
    this.countryListBox = page.locator('//select[@id="country"]');
    this.zipCode = page.locator('//input[@id="zipcode"]');
    this.occupationListBox = page.locator('//select[@id="occupation"]');
    this.bungeeJumpingCheckBox = page.locator("//label[normalize-space()='Bungee Jumping']");
    this.cliffDivingCheckBox = page.locator("//label[normalize-space()='Bungee Jumping']");
    this.picture = page.locator("//input[@id='picture']");
    this.buttonPrev = page.locator("//button[@id='preventervehicledata']");
    this.buttonNext = page.locator("//button[@id='nextenterproductdata']");
  }
  
  async populateEnterInsurantDataForm(motorcycleTestData) {
    console.log("Populate Enter Insurant Data Form");
    await this.firstName.fill(motorcycleTestData.firstName);
    await this.lastName.fill(motorcycleTestData.lastName);
    await this.dateOfBirth.fill(motorcycleTestData.dateOfBirth);
    await this.genderRadioButton.click();
    await this.countryListBox.selectOption({ label: motorcycleTestData.country });
    await this.zipCode.fill(motorcycleTestData.zipCode);
    await this.occupationListBox.selectOption({ label: motorcycleTestData.occupation });
    await this.bungeeJumpingCheckBox.check();
    await this.cliffDivingCheckBox.check();
  }
  
  async clickNext() {
    console.log("Click Next");
    
    await this.buttonNext.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonNext.click();
  }
}