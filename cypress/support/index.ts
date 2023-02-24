// Jotta cypress löytää itse lisäämät chainablet, muista lisätä se ensin tänne
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): any;
  }
}

Cypress.Commands.add("dataCy", (value) => {
  return cy.log("Onnistuu");
});
