Cypress.Commands.add("login", (username, password) => {
  cy.testid("login_username_field").type(`${username}`);
  cy.testid("login_password_field").type(`${password}`);
  cy.testid("sign_in_button").click();
});

cy.testid = (selector_id) => {
  return cy.get(`[data-cy=${selector_id}]`);
};
