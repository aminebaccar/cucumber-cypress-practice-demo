Feature: Test Feature
    Background:
        Given I navigate to SwagLabs' login page
        When I login to SwagLabs with the "standard.user" credentials
        Then the login is successful
        
    @SC-01 @SmokeTest
    Scenario: Add an item to the cart and checkout
        When I select the item "sauce.labs.bolt.tshirt"
        And click on add to cart
        And go to my cart
        And click on checkout
        And type in my personal data "amine.personal.data"
        And click on continue
        Then the item "sauce.labs.bolt.tshirt" should be displayed in the checkout overview page
        When click on finish
        Then get the checkout complete page

    @SC-02
    Scenario: Add two items to the cart and checkout
        When I select the item "sauce.labs.bolt.tshirt"
        And click on add to cart
        And go back to products list
        And I select the item "sauce.labs.onesie"
        And click on add to cart
        And go to my cart
        And click on checkout
        And type in my personal data "amine.personal.data"
        And click on continue
        Then the item "sauce.labs.bolt.tshirt" should be displayed in the checkout overview page
        Then the item "sauce.labs.onesie" should be displayed in the checkout overview page
        When click on finish
        Then get the checkout complete page

