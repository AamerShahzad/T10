Feature: Unsuccessful login
  I want to verify when I provide incorrect credentials I should not ba able to login 
  to practice website

  Background: 
    Given I am on HomePage

  @test1 @TitleCheck @Automation
  Scenario: Verify Title of Home Page
    Then Page title should be "My Store"

  @test5 @Login_Fail @Automation
  Scenario: Verify Login a user
    When I click sign in button
    And I enter Random Email
    And I enter Random Password
    And I click login button
    Then I should see login error is displayed
