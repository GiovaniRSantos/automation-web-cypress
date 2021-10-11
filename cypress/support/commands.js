/// <reference types="cypress" />



Cypress.Commands.add('validateIfElementExists', (locator) => {
        cy.get(locator).should('be.visible');
});
