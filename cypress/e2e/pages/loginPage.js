const { Assertions } = require("../../support/assertions");

export class LoginPage{
    assertions = new Assertions();
    // orangeHRMURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    orangeHRMURL = Cypress.env("orangeHRM_URL");
    username = '[name="username"]';
    password = 'input[placeholder="Password"]';
    signInButton = 'button'; 
    pageTitle = 'OrangeHRM';
    //==========================================================================
    navigateToOrangeHRM()
    {
        cy.visit(this.orangeHRMURL);
    }

    typeUserName(usernameValue)
    {
        cy.get(this.username).type(usernameValue).should('have.value',usernameValue);
    }

    typePassword(passwordValue)
    {
        cy.get(this.password).type(passwordValue);
    }

    clickOnSignInButton()
    {
        cy.get(this.signInButton).click();
    }

    login(usernameValue, passwordValue)
    {
        this.typeUserName(usernameValue);
        this.typePassword(passwordValue);
        cy.get(this.signInButton).click();
    }

    validateOnPageTitle()
    {
        this.assertions.assertPageTitle(this.pageTitle);
        // cy.title().should('eq',this.pageTitle);
    }
}