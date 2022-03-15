/// <reference types="cypress" />

describe("As a user I want to see my news", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const username = Cypress.env("username");
  const password = Cypress.env("password");
  const url = Cypress.env("url");
  const endpoint = Cypress.env("endpoint");

  it("loaded in the cards", () => {
    cy.login(username, password);
    cy.testid("top_news").should("have.text", "Todays top news");
    cy.testid("card_view_button").its("length").should("eq", 24);
    cy.request({
      method: "GET",
      url: url + endpoint,
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("are clickable and see 'VIEW' button", () => {
    cy.login(username, password);
    cy.testid("card_view_button")
      .should("have.attr", "href")
      .and("include", "thecatapi.com");
    cy.testid("card_view_button").eq(1).click();
    cy.url().should("contain", "/images");
  });
});

describe("As a user I want to see my news", () => {
  it("should failed to load", () => {
    const url = Cypress.env("url");
    const endpoint = Cypress.env("endpoint");
    console.log(url, endpoint);
    cy.intercept("GET", url + endpoint + "*", {
      forceNetworkError: true,
    }).as("getNetworkFailure");

    cy.visit("/");
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    cy.login(username, password);

    cy.testid("failed_load_news_message").should(
      "have.text",
      "Failed to load news"
    );
  });
});
