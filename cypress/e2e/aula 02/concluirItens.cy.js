
import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects";

describe('Concluir itens na lista de to-do', () => {

   beforeEach(() =>{
        cy.visit('/')
        var todoItens = ["Maçã", " ", "Banana", " ", "Cenoura"]
        
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)

        })

   })

   it('Adicionar um item na lista', () => {
    
    telaInicial.concluirItem()

})
});