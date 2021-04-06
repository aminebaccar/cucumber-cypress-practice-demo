import { When } from "cypress-cucumber-preprocessor/steps";
const elements = require("../../fixtures/locators.js");
const utils = require("../../support/utils.js");

When("I login to SwagLabs with the {string} credentials", (id) => {
  cy.fixture(utils.getFixtureFile("users.json")).as('credentials');
  cy.get('@credentials').then((entry) => {
    let data = entry.filter(item => (item.id == id)).shift();
    //fill login and password fields and click on enter to login
    cy.xpath(elements.LOGINPAGE.USERNAME).type(data.username)
      .xpath(elements.LOGINPAGE.PASSWORD).type(data.password)
      .xpath(elements.LOGINPAGE.LOGIN_BUTTON).click();
  });
});

When("I select the item {string}", id => {
  cy.fixture(utils.getFixtureFile("items.json")).as('items');
  cy.get('@items').then((entry) => {
    let data = entry.filter(item => (item.id == id)).shift();
    let item_locator = utils.getParameterizedLocator(elements.HOMEPAGE.ITEM_TITLE, data.name);
    cy.xpath(item_locator).click();
  });
});

When("click on add to cart", () => {
  cy.xpath(elements.ITEMPAGE.ADD_TO_CART_BUTTON).click();
});

When("go to my cart", () => {
  cy.xpath(elements.HOMEPAGE.MY_CART).click();
});

When("click on checkout", () => {
  cy.xpath(elements.CARTPAGE.CHECKOUT).click();
});

When("type in my personal data {string}", (id) => {
  cy.fixture(utils.getFixtureFile("personal_data.json")).as('personal_data');
  cy.get('@personal_data').then((entry) => {
    let data = entry.filter(item => (item.id == id)).shift();
    cy.xpath(elements.CHECKOUTINFOPAGE.FIRST_NAME).type(data.first_name)
      .xpath(elements.CHECKOUTINFOPAGE.LAST_NAME).type(data.last_name)
      .xpath(elements.CHECKOUTINFOPAGE.ZIP).type(data.zip);
  });
});

When("click on continue", () => {
  cy.xpath(elements.CHECKOUTINFOPAGE.CONTINUE).click();
});

When("click on finish", () => {
  cy.xpath(elements.CHECKOUTOVERVIEWPAGE.FINISH).click();
});