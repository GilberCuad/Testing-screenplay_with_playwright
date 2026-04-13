Feature: login
  As a diggi pymes user
  I want to log in
  To access the platform
  
 Background:
    Given Tester enter the URL for diggi pymes
  
  @LOGIN
  Scenario: login in diggi pymes
    When he enters the diggi pymes URL and logs in with a valid email and password.
    Then he should see the diggi pymes header when you log in