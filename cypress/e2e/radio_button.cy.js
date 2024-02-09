
describe("Testando elementos na demoqa", () => {
    it("abrir", () => {
      cy.visit("https://demoqa.com/")
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(1) > :nth-child(1) > .avatar").click()
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();


      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click();
      cy.get(':nth-child(3) > .custom-control-label').click();
      cy.get('#impressiveRadio').check();
      /* ==== End Cypress Studio ==== */
    })
  
  });