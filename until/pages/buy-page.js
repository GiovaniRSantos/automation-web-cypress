class BuyPage{

goToHomeScreen(){
    cy.intercept('HEAD', '**/images/**').as('waitImagesLoad')
    cy.visit('/')
    cy.wait('@waitImagesLoad')
}
    
}

export default BuyPage