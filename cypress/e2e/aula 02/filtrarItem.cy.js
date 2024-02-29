
import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects";

describe('validar os filtros da aplciação após adição de itens', () => {

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

   it('Filtrar itens ativos ', () => {
    
    telaInicial.filtrarItem("Active")
})

    it.skip('Filtrar itens concluidos', () => {
        
    });
});