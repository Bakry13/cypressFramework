const { LoginPage } = require("./pages/loginPage")

describe('POM test file', function() {
  const loginPage = new LoginPage();

  it('POM Test', function() {
    loginPage.navigateToOrangeHRM();
    loginPage.typeUserName('Admin');
    loginPage.typePassword('admin123');
    loginPage.clickOnSignInButton();
    loginPage.validateOnPageTitle();
  })
})