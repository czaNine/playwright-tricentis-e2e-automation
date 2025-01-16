import { motorcycleTestData } from '../data/TestData';

export default class MotorcycleSendQuotePage{
  constructor(page){
    this.page = page;
    this.email = page.locator("//input[@id='email']");
    this.username = page.locator("//input[@id='username']");
    this.password = page.locator("//input[@id='password']");
    this.confirmPassword = page.locator("//input[@id='confirmpassword']");
    this.buttonPrev = page.locator("//button[@id='prevselectpriceoption']");
    this.buttonSend = page.locator("//button[@id='sendemail']");
    this.sendingEmailSuccess = page.locator("//h2[normalize-space()='Sending e-mail success!']");
    this.buttonOK = page.locator("//button[normalize-space()='OK']");
  }

  async populateEmail(motorcycleTestData){
    console.log("Populate Email");

    const email = this.email;
    await email.waitFor({ state: 'visible', timeout: 15000 });
    await email.fill(motorcycleTestData.email);
  }

  async populateUsername(motorcycleTestData){
    console.log("Populate Username");

    const username = this.username;
    await username.waitFor({ state: 'visible', timeout: 15000 });
    await username.fill(motorcycleTestData.username);
  }

  async populatePassword(motorcycleTestData){
    console.log("Populate Password");

    const password = this.password;
    await password.waitFor({ state: 'visible', timeout: 15000 });
    await password.fill(motorcycleTestData.password);
  }

  async populateConfirmPassword(motorcycleTestData){
    console.log("Populate Confirm Password");

    const confirmPassword = this.confirmPassword;
    await confirmPassword.waitFor({ state: 'visible', timeout: 15000 });
    await confirmPassword.fill(motorcycleTestData.confirmPassword);
  }

  async clickSend(){
    console.log("Click Send");

    await this.buttonSend.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonSend.click();
  }

  async validateEmailSendingSuccess(){
    console.log("Validate Success Message");

    const sendingEmailSuccess = this.sendingEmailSuccess;
    await sendingEmailSuccess.waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickOKButton() {
    console.log("Click OK Button");

    await this.buttonOK.waitFor({ state: 'visible', timeout: 15000 });
    await this.buttonOK.click();
  }
}