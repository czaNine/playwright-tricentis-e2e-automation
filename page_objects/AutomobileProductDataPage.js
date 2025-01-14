import { testData } from '../data/TestData';

export default class AutomobileProductDataPage{
  constructor(page){
    this.page = page;
    this.startDate = page.locator("//input[@id='startdate']");
    this.insuranceSum = page.locator("//select[@id='insurancesum']");
    this.meritRating = page.locator("//select[@id='meritrating']");
    this.damageInsurance = page.locator("//select[@id='damageinsurance']");
    this.legalDefense = page.locator("//input[@id='LegalDefenseInsurance']/..");
    this.courtesyCar = page.locator("//select[@id='courtesycar']");
    this.buttonNext = page.locator("//button[@id='nextselectpriceoption']");
  }

  async populateEnterProductDataForm(testData){
    console.log("Populate Enter Product Data Form");

    const startDate = this.startDate;
    await startDate.waitFor({ state: 'visible', timeout: 15000 });
    await startDate.fill(testData.startDate);

    const insuranceSum = this.insuranceSum;
    await insuranceSum.waitFor({ state: 'visible', timeout: 15000 });
    await insuranceSum.selectOption({ label: testData.insuranceSum });

    const meritRating = this.meritRating;
    await meritRating.waitFor({ state: 'visible', timeout: 15000 });
    await meritRating.selectOption({ label: testData.meritRating });

    const damageInsurance = this.damageInsurance;
    await damageInsurance.waitFor({ state: 'visible', timeout: 15000 });
    await damageInsurance.selectOption({ label: testData.damageInsurance });

    const legalDefense = this.legalDefense;
    await legalDefense.waitFor({ state: 'visible', timeout: 15000 });
    await legalDefense.check();

    const courtesyCar = this.courtesyCar;
    await courtesyCar.waitFor({ state: 'visible', timeout: 15000 });
    await courtesyCar.selectOption({ label: testData.courtesyCar });
  }

  async clickNext(){
    console.log("Click Next");

    await this.buttonNext.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonNext.click();
  }
}