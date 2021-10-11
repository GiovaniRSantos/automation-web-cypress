/// <reference types="cypress" />

import Constants from "../../until/constants/constants";
import LoginObjects from "../../until/PageObject/loginObject/login-object";

const constants = new Constants();
const loginObjects = new LoginObjects();


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

Cypress.Commands.add('closeSessionNavigator', () => {
    cy.clearCookies()
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
});

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.clickElement(loginObjects.btnAccount);
    cy.fill(loginObjects.inputEmail, constants.user);
    cy.clickElement(loginObjects.btnContinueLogin);
    cy.fill(loginObjects.inputPassword, constants.password);
    cy.clickElement(loginObjects.btnSubmit);
});

Cypress.Commands.add('mouseOver', (locator) => {
    cy.get(locator).trigger('mouseover');
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

Cypress.Commands.add('selectValue', (locator, value) => {
    cy.get(locator).select(value)
});

Cypress.Commands.add('validateElementText', (locator, text) => {
    cy.get(locator, {
        timeout: 50000
    }).should('contain.text', text);
});
