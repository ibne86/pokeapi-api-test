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

// //We are creating a custom command named GETrequest which has URL and userDataLink as argument
// Cypress.Commands.add("GETrequest", (url, data) => {
//   //Usual GET request command
//   cy.request("GET", `${Cypress.env(url) + data}`);
// });

Cypress.Commands.add('getBerry', (idOrName, failOnStatusCode = true) => {
    cy.request({
      method: 'GET',
      url: `/api/v2/berry/${idOrName}`,
      failOnStatusCode: failOnStatusCode
    });
  });

Cypress.Commands.add('getBerryFlavor', (idOrName) => {
    return cy.request({
      method: 'GET',
      url: `/api/v2/berry-flavor/${idOrName}`
    });
  });