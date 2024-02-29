
describe("Testando elementos na demoqa", () => {
  it("abrir", () => {
    cy.visit("https://demoqa.com/")
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(1) > :nth-child(1) > .avatar").click()
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#userName').type('Matheus Santana Schon');
    cy.get('#userEmail').type('matheusr@esparta.com');
    cy.get('#submit').click();
    /* ==== End Cypress Studio ==== */
  })

});
