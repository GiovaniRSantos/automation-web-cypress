/// <reference types="cypress" />

import BuyPage from "../../../until/pages/buy-page";

const buyPage = new BuyPage();



context('FEATURE-BUY ITEM', () => {
    describe('Validate home screen', () => {
        it('Given I fill in the url with "www.amazon.com.br"', () => {
            buyPage.goToHomeScreen();
        })
        it('When the browser takes you to the amazon home screen', () => {

        });
        it('Then the home page components are displayed', () => {

        });
    });
});