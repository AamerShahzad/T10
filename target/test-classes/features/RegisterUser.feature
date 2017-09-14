Feature: User registeration
  I want to verify that I can register to the practice website when I provide 
  correct details.

  Background: 
    Given I am on HomePage

  @test1 @TitleCheck @Automation
  Scenario: Verify Title of Home Page
    Then Page title should be "My Store"

  @test3 @Register @Automation
  Scenario: Verify Registering a user
    When I click sign in button
    And I enter my email under create an account header
    And I click create an account button
    And I enter random details
    And I click register button
    Then I should see I have successfully registered
