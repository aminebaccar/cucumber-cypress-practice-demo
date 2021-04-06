import { Then } from "cypress-cucumber-preprocessor/steps";
const elements = require("../../fixtures/locators.js");
const utils = require("../../support/utils.js");

Then("get the checkout complete page", () => {
    cy.xpath(elements.CHECKOUTCOMPLETE.COMPLETE_HEADING).should("exist");
});

Then("the item {string} should be displayed in the checkout overview page", id => {
    cy.fixture(utils.getFixtureFile("items.json")).as('items');
    cy.get('@items').then((entry) => {
        let data = entry.filter(item => (item.id == id)).shift();
        let item_entry_locator = utils.getParameterizedLocator(elements.CHECKOUTOVERVIEWPAGE.ITEM_ENTRY, data.name);
        cy.xpath(item_entry_locator).should("exist");
    });
});

Then("the login is successful", () => {
    cy.xpath(elements.HOMEPAGE.PRODUCTS_TITLE_SPAN).should("exist");
});