Feature: Successful login
  I want to verify when I provide correct details I can login successfully to the 
  practice website

  Background: 
    Given I am on HomePage

  @test1 @TitleCheck @Automation
  Scenario: Verify Title of Home Page
    Then Page title should be "My Store"

  @test4 @Login_Success @Automation
  Scenario: Verify Login a user
    When I click sign in button
    And I enter my Email "testabc@yahoo.com"
    And I enter my password "password1"
    And I click login button
    Then I should see I have successfully logged in
