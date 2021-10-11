/// <reference types="cypress" />

import BuyPage from "../../../until/pages/buyPage/buy-page";
import Constants from "../../../until/constants/constants";
import BuyObjects from "../../../until/PageObject/buyObject/buy-object";


const buyPage = new BuyPage();
const constants = new Constants();
const buyObjects = new BuyObjects();



context('FEATURE-BUY ITEM', () => {
    describe('Validate home screen', () => {
        it('Given I fill in the url with "www.amazon.com.br"', () => {
            cy.login(constants.user, constants.password);
            buyPage.goToHomeScreen();
        })
        it('When the browser takes you to the amazon home screen', () => {
            cy.validateUrlContain(constants.urlDefault);
        });
        it('Then the home page components are displayed', () => {
            cy.validateIfElementExists(buyObjects.inputSearch);
        });
    });

    describe('Validate validate product search', () => {
        it('Given I fill in the url with "www.amazon.com.br"', () => {
            cy.fill(buyObjects.inputSearch, constants.productDefault);
        })
        it('When searching for an item in the search bar', () => {
            cy.clickElement(buyObjects.btnSearch);
        });
        it('Then the items are displayed successfully', () => {
            buyPage.clickOptionSearchItemDefault();
        });
    });

    describe('Validate Add item to cart successfully', () => {
        it('Given you have selected an item', () => {
            buyPage.validateItemCart();
        })
        it('When you click on the add to cart button', () => {
            cy.validateElementText(buyObjects.quantitySelected, constants.amountDefault);
        });
        it('Then the message is displayed stating that it has been added to the cart', () => {
            buyPage.deleteAllItemsCart();
            cy.closeSessionNavigator();
        });
    });
});