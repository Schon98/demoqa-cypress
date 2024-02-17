describe('Testando elementos buttons', () => {
    it('testar botões', () => {
        cy.visit('https://demoqa.com/')
        cy.get(":nth-child(1) > :nth-child(1) > .avatar").click()
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
        cy.get('#doubleClickBtn').click();
        cy.get('#doubleClickBtn').click();
    });
    
});