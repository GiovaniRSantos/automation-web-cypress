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

    validateQuantityAdd(value = String) {
        cy.get(buyObjects.quantitySelected).should('have.value', value);
    }

    validateItemCart() {
        cy.get(buyObjects.tittleItemAnnouncement).invoke('text').then((text) => {
            const textTr = text.replace(/(\r\n|\n|\r)/gm, "");
            cy.selectValue(buyObjects.selectQuantity, constants.amountDefault);
            cy.clickElement(buyObjects.btnAdd);
            cy.clickElement(buyObjects.btnCart);
            cy.log(textTr);
            cy.get(buyObjects.tittleItemFinish).should('have.text', textTr);
        })
    }

    deleteAllItemsCart() {
        cy.clickElement(buyObjects.btnDeleteItem);
    }

}

export default BuyPage