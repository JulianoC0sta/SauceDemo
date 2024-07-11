// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("loginValido", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  //Preencher user
  cy.get("#user-name").type(username);
  cy.get("#user-name").should("have.value", username);

  // Captura a tela após o preenchimento do usuario
  cy.screenshot("Preenchi usuario correto");

  // Preencher password
  cy.get("#password").type(password), { log: false };

  // Captura a tela após o preenchimento da senha
  cy.screenshot("Preenchi senha correta");

  // Clica no botão login
  cy.get("#login-button").click();

  // Captura a tela inicial após o login correto
  cy.screenshot("Preenchi senha correta");
});

Cypress.Commands.add("loginInvalido", () => {
  const usernameError = Cypress.env("usernameError");
  const passwordError = Cypress.env("passwordError");

  cy.visit("/");

  //Preencher user
  cy.get("#user-name").type(usernameError);
  cy.get("#user-name").should("have.value", usernameError);

  // Captura a tela após o preenchimento da usuario
  cy.screenshot("Preenchi usuario incorreto");

  // Preencher password
  cy.get("#password").type(passwordError), { log: false };
  cy.get("#login-button").click();

  // Captura a tela após o preenchimento da senha incorreta
  cy.screenshot("Preenchi senha incorreta");
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
