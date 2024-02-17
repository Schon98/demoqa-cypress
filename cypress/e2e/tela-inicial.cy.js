import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('acessar a pagina do todoMVC', () => {
    it('abrir o site', () => {
        cy.visit('https://todomvc.com/examples/javascript-es6/dist/')
        telaInicial.inputText()
    });
});