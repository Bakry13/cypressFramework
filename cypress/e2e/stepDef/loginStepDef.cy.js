const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// const { Given, When, Then } = require("cypress-cucumber-preprocessor");
const { LoginPage } = require("../pages/loginPage");

const loginPage = new LoginPage();

Given("I visit OrangeHRM portal", (  ) =>{
	loginPage.navigateToOrangeHRM();
} );

When("I login with {string} and {string}", (username, password) =>{
	loginPage.login(username, password)
} );

Then("I should see home page", (  ) =>{
	loginPage.validateOnPageTitle();
		// return 'pending';
} );
