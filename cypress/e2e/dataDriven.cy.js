const neatCSV = require('neat-csv');
const { LoginPage } = require("./pages/loginPage");

describe('data driven with POM', function() {
  const loginPage = new LoginPage();
  it('read from JSON file', function() {
    loginPage.navigateToOrangeHRM();
    cy.fixture('credentials').then(data => {
      loginPage.typeUserName(data.username);
      loginPage.typePassword(data.password);
    })
    loginPage.clickOnSignInButton();
    loginPage.validateOnPageTitle();
  })

  it('read from csv file', function() {
    loginPage.navigateToOrangeHRM();
    let table;
    cy.fixture('csvCredentials.csv').then(neatCSV).then(data => {
      table = data;
      loginPage.typeUserName(table[0]["username"]);
      loginPage.typePassword(table[0]["password"]);
    })
    loginPage.clickOnSignInButton();
    loginPage.validateOnPageTitle();
  })

  it('read from excel file', function() {
    loginPage.navigateToOrangeHRM();
    cy.task("readExcel",{fileName:"credentials",generatedFileName:"excelCredentials"});
    cy.fixture('excelCredentials').then(data => {
      loginPage.typeUserName(data[0].username);
      loginPage.typePassword(data[0].password);
    })
    loginPage.clickOnSignInButton();
    loginPage.validateOnPageTitle();
  })
})