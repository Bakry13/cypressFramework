export class LoginPage{
    orangeHRMURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
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
        cy.title().should('eq',this.pageTitle);
    }
}