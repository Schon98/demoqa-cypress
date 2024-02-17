<<<<<<< HEAD

import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects";
=======
import telaInicial from  '../support/pageObjects/telaInicial.pageObjects'
>>>>>>> 760b585902ebe0d1c9960fa15f5e9fb4ecca01d7

describe('Adicionar um item no todo', () => {

   beforeEach(() =>{
        cy.visit('/')

   })

   it('Adicionar um item na lista', () => {
<<<<<<< HEAD
    telaInicial.inputText('dado 1')
    telaInicial.inputText('dado 2')


})

   it('adicionar mais de um item a lista', () => {
       var todoItens =  ["Maça", "Banana", "Cenoura"]

       todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)
       })
   });
=======
    telaInicial.inputText()
})

>>>>>>> 760b585902ebe0d1c9960fa15f5e9fb4ecca01d7
    
});