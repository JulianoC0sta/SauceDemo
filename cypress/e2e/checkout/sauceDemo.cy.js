/// <reference types="cypress" />

context("Fluxos SauceDemo Testes", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login válido", () => {
    cy.loginValido();

    // Valida se o ssitema direcionou para tela de login através do parametro da url
    cy.url().should("include", "/inventory.html");

    // captura tela inicial com parametro /inventory.html
    cy.screenshot("Tela inicial Sauce");
  });

  it("Login inválido", () => {
    cy.loginInvalido();

    // Valida se o ssitema direcionou para tela de login através do parametro da url
    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    // captura tela após o login incorreto
    cy.screenshot("Mensagem de Login incorreto");
  });
});
