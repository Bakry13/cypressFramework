// / <reference types="Cypress"/> 
describe('first test suit', function() {
  it('login test', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin').should('have.value','Admin');
    // cy.xpath("//input[@placeholder='Password']").type('admin123');
    cy.get('input[placeholder="Password"]').type('admin123');
    cy.get("button").click();
    cy.title().should('eq','OrangeHRM');
  })
})