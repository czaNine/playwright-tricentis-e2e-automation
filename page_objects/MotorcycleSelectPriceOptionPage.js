export default class MotorcycleSelectPriceOptionPage{
  constructor(page){
    this.page = page;
    this.goldButton = page.locator("//input[@id='selectgold']/..");
    this.buttonPrev = page.locator("//button[@id='preventerproductdata']");
    this.buttonNext = page.locator("//button[@id='nextsendquote']");
    this.incompleteFieldMessage = page.locator("(//p[contains(text(),'Please, complete the first three steps to see the ')])[1]");
  }

  async selectPriceOption(){
    console.log("Select Price Option");

    await this.goldButton.waitFor({ state: 'visible', timeout: 15000 });
    await this.goldButton.click();
  }

  async clickNext(){
    console.log("Click Next");

    await this.buttonNext.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonNext.click();
  }

  async validateIncompleteFieldInputMessage(){
    console.log("Valiate Error Message when the inputted required fields are incomplete");
    
    const incompleteFieldMessage = this.incompleteFieldMessage;
    await this.incompleteFieldMessage.waitFor({ state: 'visible', timeout: 15000 });
  }
}