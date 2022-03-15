/// <reference types="cypress" />

describe("As a user I want to see my news", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const username = Cypress.env("username");
  const password = Cypress.env("password");

  it("loaded in the cards", () => {
    cy.get("[data-cy=login_username_field]").type(`${username}`);
    cy.get("[data-cy=login_password_field]").type(`${password}`);
    cy.get("[data-cy=sign_in_button").click();

    cy.get("[data-cy=top_news]").should("have.text", "Todays top news");
    cy.get("[data-cy=card_view_button]").its("length").should("eq", 24);
    cy.request({
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("are clickable and see 'VIEW' button", () => {
    cy.get("[data-cy=login_username_field]").type(`${username}`);
    cy.get("[data-cy=login_password_field]").type(`${password}`);
    cy.get("[data-cy=sign_in_button").click();

    cy.get("[data-cy=card_view_button]")
      .should("have.attr", "href")
      .and("include", "thecatapi.com");
  });
});

describe("As a user I want to see my news", () => {
  it("failed to load", () => {
    cy.intercept("GET", "https://api.thecatapi.com/v1/images/search*", {
      forceNetworkError: true,
    }).as("getNetworkFailure");

    cy.visit("/");
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    cy.get("[data-cy=login_username_field]").type(`${username}`);
    cy.get("[data-cy=login_password_field]").type(`${password}`);
    cy.get("[data-cy=sign_in_button").click();

    cy.get("[data-cy=failed_load_news_message]").should(
      "have.text",
      "Failed to load news"
    );
  });
});
