Feature: Add to cart
  I want to verify when I want to purchase an item on the practice website
  it can be added to the cart

  Background: 
    Given I am on HomePage

  @test1 @TitleCheck @Automation
  Scenario: Verify Title of Home Page
    Then Page title should be "My Store"

  @test2 @AddToCart @Automation
  Scenario: Verify Item is added to the cart
    When I hover over first item
    And I click add to cart button
    Then I should see item has been added to cart message is displayed
