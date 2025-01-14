import { testData } from '../data/TestData';

export default class SendQuotePage{
  constructor(page){
    this.page = page;
    this.email = page.locator("//input[@id='email']");
    this.username = page.locator("//input[@id='username']");
    this.password = page.locator("//input[@id='password']");
    this.confirmPassword = page.locator("//input[@id='confirmpassword']");
    this.buttonSend = page.locator("//button[@id='sendemail']");
    this.sendingEmailSuccess = page.locator("//h2[normalize-space()='Sending e-mail success!']");
    this.buttonOK = page.locator("//button[normalize-space()='OK']");
  }

  async populateSendQuoteForm(testData){
    console.log("Populate Send Quote Form");

    const email = this.email;
    await email.waitFor({ state: 'visible', timeout: 15000 });
    await email.fill(testData.email);

    const username = this.username;
    await username.waitFor({ state: 'visible', timeout: 15000 });
    await username.fill(testData.username);

    const password = this.password;
    await password.waitFor({ state: 'visible', timeout: 15000 });
    await password.fill(testData.password);

    const confirmPassword = this.confirmPassword;
    await confirmPassword.waitFor({ state: 'visible', timeout: 15000 });
    await confirmPassword.fill(testData.confirmPassword);
  }

  async clickSend(){
    console.log("Click Send");
    
    await this.buttonSend.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonSend.click();
    await this.page.waitForLoadState('networkidle');
  }
  
  async validateEmailSendingSuccess(){
    console.log("Validate Success Message");

    await this.sendingEmailSuccess.waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickOKButton() {
    console.log("Click OK Button");

    await this.buttonOK.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonOK.click();
  }
}