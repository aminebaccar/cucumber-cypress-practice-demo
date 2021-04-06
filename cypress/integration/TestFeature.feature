Feature: Test Feature
    Background:
        Given I navigate to SwagLabs' login page
        When I login to SwagLabs with the "standard.user" credentials
        Then the login is successful
        
    @SC-01    
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

