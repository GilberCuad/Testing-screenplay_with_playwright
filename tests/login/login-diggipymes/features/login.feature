Feature: login
  As a website user
  I want to log in
  To access the platform

  Background:
    Given Tester enter the URL for website

  @LOGIN
  Scenario: login in website
    When he enters the diggi pymes URL and logs in with a valid email and password.
    Then he should see the diggi pymes header when you log in
