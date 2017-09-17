#Title feature
Feature: Title check
    I should be able to go to the website
    and check its title.

Scenario: Get the title of the website
    Given I go to the website
    Then I expect the title of the page "Films Register"