import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to SwagLabs' login page", () => {
    //visit my web app by providing the root "/", Cypress will automatically use the baseUrl
    //provided in the cypress.json to do the navigation
    cy.visit("/");
});