const elem = require('../elements/tela-inicial.elements').ELEMENTS 
<<<<<<< HEAD
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtrarItem = require('../elements/tela-inicial.elements').FILTROS


class telaInicial{
    inputText(dado){
        cy.get(elem.inputTodo).type(dado)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }

    validarInput(texto){
        cy.get(elem.inputTodo)
        .should('have.attr', 'placeholder')
        .and('include', texto)

    }

    validarContador(numero){
        cy.get(filtrarItem.contador)
        .find('strong')
        .should('have.text', numero)
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .
        first()
        . 
        click()
    }
    filtrarItem(menu){
        cy.get(filtrarItem.filtroToDo).contains(menu).and('be.visible')
        .click()

    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
=======

class telaInicial{
    inputText(){
        cy.get(elem.inputTodo).type("Matheus")
>>>>>>> 760b585902ebe0d1c9960fa15f5e9fb4ecca01d7
    }
}

export default new telaInicial();