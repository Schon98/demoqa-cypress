
import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects";

describe('deletar itens da lista', () => {

   beforeEach(() =>{
        cy.visit('/')
        var todoItens = ["Maçã", " ", "Banana", " ", "Cenoura"]
        
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)

            if (indice < array.length - 1) {
                cy.get('input.new-todo[autofocus]').type('{enter}');
            }

        })

   })

   it('exclusão de um item da lista', () => {
    
    telaInicial.deletarItem()
})

});