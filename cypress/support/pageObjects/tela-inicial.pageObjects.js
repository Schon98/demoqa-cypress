const elem = require('../elements/tela-inicial.elements').ELEMENTS 

class telaInicial{
    inputText(){
        cy.get(elem.inputTodo).type("Matheus")
    }
}

export default new telaInicial();