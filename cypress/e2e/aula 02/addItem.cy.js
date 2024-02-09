import telaInicial from  '../support/pageObjects/telaInicial.pageObjects'

describe('Adicionar um item no todo', () => {

   beforeEach(() =>{
        cy.visit('/')

   })

   it('Adicionar um item na lista', () => {
    telaInicial.inputText()
})

    
});