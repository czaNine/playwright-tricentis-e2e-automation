import { motorcycleTestData } from '../data/MotorcycleTestData';

export default class MotorcycleProductDataPage{
  constructor(page){
    this.page = page;
    this.startDate = page.locator("//input[@id='startdate']");
    this.insuranceSum = page.locator("//select[@id='insurancesum']");
    this.damageInsurance = page.locator("//select[@id='damageinsurance']");
    this.euroProtection = page.locator("//input[@id='EuroProtection']/..");
    this.buttonPrev = page.locator("//button[@id='preventerinsurancedata']");
    this.buttonNext = page.locator("//button[@id='nextselectpriceoption']");
  }

  async populateStartDate(motorcycleTestData){
    console.log("Populate Start Date");

    const startDate = this.startDate;
    await startDate.waitFor({ state: 'visible', timeout: 15000 });
    await startDate.fill(motorcycleTestData.startDate);
  }

  async populateInsuranceSum(motorcycleTestData){
    console.log("Populate Insurance Sum");

    const insuranceSum = this.insuranceSum;
    await insuranceSum.waitFor({ state: 'visible', timeout: 15000 });
    await insuranceSum.selectOption({ label: motorcycleTestData.insuranceSum });
  }

  async populateDamageInsurance(motorcycleTestData){
    console.log("Populate Damage Insurance");

    const damageInsurance = this.damageInsurance;
    await damageInsurance.waitFor({ state: 'visible', timeout: 15000 });
    await damageInsurance.selectOption({ label: motorcycleTestData.damageInsurance });
  }

  async populateEuroProtection(){
    console.log("Populate Euro Protection");

    const euroProtection = this.euroProtection;
    await euroProtection.waitFor({ state: 'visible', timeout: 15000 });
    await euroProtection.check();
  }

  async clickNext(){
    console.log("Click Next");

    await this.buttonNext.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonNext.click();
  }
}