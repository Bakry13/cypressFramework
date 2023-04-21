const { LoginPage } = require("./pages/loginPage")

let credentialData;
before(()=>{
  cy.fixture('credentials').then(data => {
    credentialData = data;
  })
})

describe('data driven with POM', function() {
  const loginPage = new LoginPage();
  it('read from JSON file', function() {
    loginPage.navigateToOrangeHRM();
    loginPage.typeUserName(credentialData.username);
    loginPage.typePassword(credentialData.password);
    loginPage.clickOnSignInButton();
    loginPage.validateOnPageTitle();
  })
})