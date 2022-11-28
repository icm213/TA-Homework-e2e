Feature: Bootcamp E2E

  Background:
    Given Browser width is 1920px
    Given I am on the "https://www.newegg.com/" page
    Given I am closing the pop-up ad if it exist


  Scenario Outline: I am searching Windows software to buy
    Given I am typing <demanded> phrase on the searchbar
    When I am clicking Search button
    Then I should be redirect on the "https://www.newegg.com/p/pl?d=Windows" page
    Then There have to be at least one item to buy

    Examples:
      | demanded  |
      | "Windows" |
#| "ram"             |
#  | "wdvevefbwbwdbwg" |
