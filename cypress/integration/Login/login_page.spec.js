/// <reference types="cypress" />

describe("As a user I want to log in to the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const USERNAME = "user1";
  const PASSWORD = "pa55word";
  const user_incorrect = "pa55word";
  const password_incorrect_short = "cat";
  const password_incorrect_long = "catdogcat";

  it("should open the web site for first time (when not logged in yet)", () => {
    cy.get("[data-cy=box_sign_in]").should("have.text", "Sign in");
    cy.get("[data-cy=login_username_field]").should("have.value", "");
    cy.get("[data-cy=login_password_field]").should("have.value", "");
    cy.get("[data-cy=sign_in_button").should("have.text", "Sign In");
    cy.get("[data-cy=copyright_section").should(
      "have.text",
      "Copyright © Sliide 2022."
    );
  });

  it("User login failed", () => {
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
    cy.get("[data-cy=login_username_field]").type(`${USERNAME}`);
    cy.get("[data-cy=login_password_field]").type(`${password_incorrect_long}`);
    cy.get("[data-cy=sign_in_button").click();
    cy.get("#password-helper-text").should("have.text", "Password incorrect");
  });

  it("User login succeed", () => {
    cy.get("[data-cy=login_username_field]").type(`${USERNAME}`);
    cy.get("[data-cy=login_password_field]").type(`${PASSWORD}`);
    cy.get("[data-cy=sign_in_button").click();
    cy.get("[data-cy=news_logo").should("have.text", "News");
  });

  it("User opens web site next time (when previously logged in)  ", () => {
    cy.get("[data-cy=login_username_field]").type(`${USERNAME}`);
    cy.get("[data-cy=login_password_field]").type(`${PASSWORD}`);
    cy.get("[data-cy=sign_in_button").click();
    cy.get("[data-cy=news_logo").should("have.text", "News");
    cy.reload();
    cy.get("[data-cy=news_logo").should("have.text", "News");
  });
});
