import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects";

describe("Regressivo ToDo App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Validar a tela inicial", () => {
    it("Validar área label de input de dados", () => {
      telaInicial.validarInput("What needs to be done");
    });
  });

  context("Validar a adição de itens", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("adicionar mais de um item à lista", () => {
      var todoItens = ["Maça", "Banana", "Cenoura", " "];

      // Usar o spread operator para criar uma cópia do array e evitar problemas com a referência no forEach
      [...todoItens].forEach(function (item, indice, array) {
        telaInicial.inputText(item);

        if (indice < array.length - 1) {
          cy.get('input.new-todo[autofocus]').type('{enter}');
        }

        telaInicial.validarContador(1);
      });
    });
  });

  context("Validar a conclusão de itens", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["Maçã", " ", "Banana", " ", "Cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
        if (indice < array.length - 1) {
          telaInicial.inputText('{enter}');
        }
      });
    });

    it('Adicionar um item na lista', () => {
      telaInicial.concluirItem();
      telaInicial.validarContador(2);
      telaInicial.validarSizeToDo(2);
    });
  });

  context("Validar o filtro de itens", () => {
    beforeEach(() => {
      cy.visit('/');
      var todoItens = ["Maçã", "Banana", "Cenoura", "Batata"];

      todoItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);

        if (indice < array.length - 1) {
          cy.get('input.new-todo[autofocus]').type('{enter}');
        }
      });

      // Concluir o último item fora do loop forEach
      telaInicial.concluirItem();
    });

    it('Validar a lista de itens ativos', () => {
      telaInicial.filtrarItem('Active');
      telaInicial.validarSizeToDo(4);
    });

    it('Validar a lista de itens concluídos', () => {
      telaInicial.filtrarItem('Completed');
    });

  context("Validar a exclusão de itens", () => {
      beforeEach(() => {
        cy.visit('/');
        var todoItens = ["Maçã", " ", "Banana", " ", "Cenoura"];

        todoItens.forEach(function (item, indice, array) {
          telaInicial.inputText(item);

          if (indice < array.length - 1) {
            cy.get('input.new-todo[autofocus]').type('{enter}');
          }
        });
      });

      it('exclusão de um item da lista', () => {
        telaInicial.deletarItem();
        telaInicial.validarSizeToDo();
      });
    });
  });
});
