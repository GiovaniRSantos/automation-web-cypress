/// <reference types="cypress" />

afterEach(() => {
    let str = [];
    cy.getCookies().then((cook) => {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++) {
            if (cook.length > 0 && l == 0) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            } else if (cook.length > 1 && l > 1) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
        }
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
});

Cypress.Commands.add('waitAllGetRequest', () => {
    cy.intercept('GET', '/**').as('waitGET');
    cy.wait('@waitGET');
});

Cypress.Commands.add('validateIfElementExists', (locator) => {
        cy.get(locator).should('be.visible');
});

Cypress.Commands.add('validateUrlContain', (text) => {
        cy.url().should('contain', text);
});

Cypress.Commands.add('fill', (locator, text) => {
        cy.get(locator).clear();
        cy.get(locator).type(text);
});

Cypress.Commands.add('clickElement', (locator) => {
        cy.get(locator).click();
});
