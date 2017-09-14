Feature: Purchase item
  I want to verify I can purchase an item on the practice website
   and get the order completion message

  Background: 
    Given I am on HomePage

  @test1 @TitleCheck @Automation
  Scenario: Verify Title of Home Page
    Then Page title should be "My Store"

  @test6 @Purchase @Automation
  Scenario: Verify purchase item path
    When I hover over first item
    And I click add to cart button
    And I click checkout button
    And I click proceed to checkout button
    And I enter my Email
    And I enter my password
    And I click login button
    And I click Proceed to shipment button
    And I accept Terms and Conditions
    And I click proceed to payment button
    And I click Pay by bank button
    And I click confirm my order button
    Then I should see text "Your order on My Store is complete." on the page
