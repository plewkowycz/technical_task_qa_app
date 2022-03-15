/// <reference types="cypress" />

describe("As a user I want to land on login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  const user_incorrect = "cat";
  const password_incorrect_short = "cat";
  const password_incorrect_long = "catdogcat";

  it("to view login page for the first time", () => {
    cy.get("[data-cy=box_sign_in]").should("have.text", "Sign in");
    cy.get("[data-cy=login_username_field]").should("have.value", "");
    cy.get("[data-cy=login_password_field]").should("have.value", "");
    cy.get("[data-cy=sign_in_button").should("have.text", "Sign In");
    cy.get("[data-cy=copyright_section").should(
      "have.text",
      "Copyright © Sliide 2022."
    );
  });

  it("and fail login to application", () => {
    cy.get("[data-cy=sign_in_button").click();
    cy.get("#username-helper-text").should("have.text", "Username is required");
    cy.get("#password-helper-text").should("have.text", "Password is required");

    cy.get("[data-cy=login_username_field]").type(`${user_incorrect}`);
    cy.get("[data-cy=login_password_field]").type(
      `${password_incorrect_short}`
    );
    cy.get("[data-cy=sign_in_button]").click();
    cy.get("#username-helper-text").should("have.text", "Wrong username");
    cy.get("#password-helper-text").should(
      "have.text",
      "Minimum 8 characters length"
    );

    cy.get("[data-cy=login_username_field]").clear();
    cy.get("[data-cy=login_password_field]").clear();
    cy.get("[data-cy=login_username_field]").type(`${username}`);
    cy.get("[data-cy=login_password_field]").type(`${password_incorrect_long}`);
    cy.get("[data-cy=sign_in_button").click();
    cy.get("#password-helper-text").should("have.text", "Password incorrect");
  });

  it("and succesfuly login to application", () => {
    cy.get("[data-cy=login_username_field]").type(`${username}`);
    cy.get("[data-cy=login_password_field]").type(`${password}`);
    cy.get("[data-cy=sign_in_button").click();
    cy.get("[data-cy=news_logo").should("have.text", "News");
  });

  it("and opens web again (when previously logged in)  ", () => {
    cy.get("[data-cy=login_username_field]").type(`${username}`);
    cy.get("[data-cy=login_password_field]").type(`${password}`);
    cy.get("[data-cy=sign_in_button").click();
    cy.get("[data-cy=news_logo").should("have.text", "News");
    cy.reload();
    cy.get("[data-cy=news_logo").should("have.text", "News");
  });
});
