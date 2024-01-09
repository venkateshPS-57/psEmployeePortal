import { test, expect } from "@playwright/test";

// Importing all required pages from POM
import loginPage from "../pages/loginPage";
import BasePage from "../pages/basepage";
import DashboardPage from "../pages/dashboardPage";

//importing testdata's
const testData = JSON.parse(JSON.stringify(require("../testData.json")));

// Test --URL
const testURL = testData.baseUrl.ProductionUrl;

// Test --User Credential
const testUserMail = testData.employee.mail;
const testUserPassword = testData.employee.password;

test("EndBreakScript", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new DashboardPage(page);
  const base = new BasePage(page);

  await base.waitTillNetworkIdle();
  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await dashboard.clickOnBreak();
});
