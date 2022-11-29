Feature: Bootcamp E2E

  Background:
    Given Browser width is 1920px
    Given I am on the "https://www.newegg.com/" page
    Given I am closing the pop-up ad if it exist


  Scenario Outline: Search bar
    Given I am typing <demanded> phrase on the searchbar
    When I am clicking Search button
    Then I should be redirect on the "https://www.newegg.com/p/pl?d=Windows" page
    Then There have to be at least one item to buy

    Examples:
      | demanded  |
      | "Windows" |

  Scenario: Internet shop logo button
    When I click the 'Todays Best Deals' button
    Then It should be open the "https://www.newegg.com/todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202" page
    Then I click on the newegg.com logo
    Then I should be turn back on the "https://www.newegg.com/" main page