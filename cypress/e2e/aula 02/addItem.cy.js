
import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects";

describe('Adicionar um item no todo', () => {

   beforeEach(() =>{
        cy.visit('/')

   })

   it('Adicionar um item na lista', () => {
    telaInicial.inputText('dado 1')
    telaInicial.inputText('dado 2')


})

   it('adicionar mais de um item a lista', () => {
       var todoItens =  ["Maça", "Banana", "Cenoura"]

       todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)
       })
   });
    
});