import BuyObjects from "../../PageObject/buyObject/buy-object";
import Constants from "../../constants/constants";

const buyObjects = new BuyObjects();
const constants = new Constants();


class BuyPage {

    goToHomeScreen() {
        cy.intercept('HEAD', '**/images/**').as('waitImagesLoad');
        cy.visit('/');
        cy.wait('@waitImagesLoad');
    }

    clickOptionSearchItemDefault() {
        cy.get(buyObjects.tittleItem).contains(constants.productDefault).click();
    }

    validateQuantityAdd(value = String){
        cy.get(buyObjects.quantitySelected).should('have.value', value);
    }

}

export default BuyPage