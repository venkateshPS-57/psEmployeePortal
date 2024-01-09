import { Page } from "@playwright/test";

export default class LoginPage {
  page: Page;
  locLogo = "";
  locMailLabel = "";
  locMailField = "//input[@placeholder='Email']";
  locPassLabel = "";
  locPassField = "//input[@id='password']";
  locLoginBtn = "//input[@value='Login']";
  locForgotPassBtn = "";
  locCreateAccBtn = "";

  constructor(page: Page) {
    this.page = page;
  }

  async goToLoginPage(myUrl: string) {
    await this.page.goto(myUrl);
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    await this.page.locator(this.locMailField).fill(email);
    await this.page.locator(this.locPassField).fill(password);
    await this.page.locator(this.locLoginBtn).click();
  }
}
