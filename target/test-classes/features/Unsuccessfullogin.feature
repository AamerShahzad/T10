Feature: Unsuccessful login
  I want to verify when I provide incorrect credentials I should not ba able to login 
  to practice website

  Background: 
    Given I am on HomePage

  @test1 @TitleCheck @Automation
  Scenario: Verify Title of Home Page
    Then Page title should be "My Store"

  @test5 @Login_Fail @Automation
  Scenario Outline: Verify Login a user
    When I click sign in button
    And I enter Random email as <Email>
    And I enter Random password as <Password>
    And I click login button
    Then I should see login error is displayed

    Examples: 
      | Email         | Password |
      | abc@yahoo.com | pass123  |
      | 777@yahoo.com | pass999  |
