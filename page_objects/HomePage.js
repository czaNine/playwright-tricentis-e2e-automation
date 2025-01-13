import { expect } from "@playwright/test";
import { testData } from "../data/TestData";

export default class HomePage {
  constructor(page){
    this.page = page;
    this.baseURL =  testData.siteData;
    this.automobileTab = page.locator("(//a[@id='nav_automobile'])[1]");
    this.truckTab = page.locator("(//a[@id='nav_truck'])[1]");
    this.motorcycleTab = page.locator("(//a[@id='nav_motorcycle'])[1]");
    this.camperTab = page.locator("(//a[@id='nav_camper'])[1]");
  }

  async validateAutomobileTab() {
    console.log("Validate Automobile Tab");

    const automobileTab = this.automobileTab;
    await automobileTab.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateTruckTab() {
    console.log("Validate Truck Tab");

    const truckTab = this.automobileTab;
    await truckTab.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateMotorcycleTab() {
    console.log("Validate Motorcycle Tab");

    const motorcycleTab = this.automobileTab;
    await motorcycleTab.waitFor({ state: 'visible', timeout: 15000 });
  }

  async validateCamperTab() {
    console.log("Validate Camper Tab");

    const camperTab = this.automobileTab;
    await camperTab.waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickAutomobileTab() {
    console.log("Click Automobile Tab");
    
    await this.automobileTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.automobileTab.click();

    await this.page.waitForLoadState('networkidle'); // Wait for the page to load 
  }
}