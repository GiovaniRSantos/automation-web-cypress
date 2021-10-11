/// <reference types="cypress" />

import Constants from "../../../until/constants/constants";
import LoginObjects from "../../../until/PageObject/loginObject/login-object";

const constants = new Constants();
const loginObjects = new LoginObjects();


context('FEATURE- LOGIN/LOGOUT', () => {
    describe('Login Success', () => {
        it('Given I fill in the url with "www.amazon.com.br"', () => {
            cy.visit('/')
            cy.clickElement(loginObjects.btnAccount);
            cy.fill(loginObjects.inputEmail, constants.user);
            cy.clickElement(loginObjects.btnContinueLogin);
        })
        it('When login successfully', () => {
            cy.fill(loginObjects.inputPassword, constants.password);
            cy.clickElement(loginObjects.btnSubmit);
        });
        it('Then the home page components are displayed Logged', () => {
            cy.validateElementText(loginObjects.sectionName, constants.loggedName);
        });
    });

    describe('Logout Success', () => {
        it('Given logged in successfully"', () => {
            cy.mouseOver(loginObjects.sectionMenu);
        })
        it('When logout successfully', () => {
         cy.clickElement(loginObjects.btnLogout);
        });
        it('Then the login page is displayed again', () => {
            cy.validateIfElementExists(loginObjects.inputEmail);
        });
    });
});