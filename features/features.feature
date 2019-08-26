
#The task is to make a short check list to test the search 
Feature: features
    Scenario: Cick on search icon
        Given I open 'https://www.indiegogo.com/'
        And 'main page' is shown
        When I click on "search icon"
        Then 'search panel' is shown
        And 'header' is not shown


    Scenario: Close search bar
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        When 'search panel' is shown
        And 'header' is not shown
        And I click on 'dismiss button'
        Then 'search panel' is not shown
        And 'header' is shown

    Scenario: check placeholder
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        When 'search panel' is shown
        Then placeholder in the search is "Search"


    Scenario: check that entered text is displayed in search bar
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        When I type 'test' in a search bar
        Then 'test' is displayed in a search bar


    Scenario: Search for something
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        When I type 'test' in a search bar
        And I press 'Enter'
        Then result page is shown

    Scenario: Check that search text is displayed on search result page
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        When I type 'test2' in a search bar
        And I press 'Enter'
        Then result page is shown
        And 'test2' is displayed in a result panel search bar

    Scenario: No result found
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        When I type '////////////////////////' in a search bar
        And I press 'Enter'
        Then result page is shown
        And '////////////////////////' is displayed in a result panel search bar
        And no results found is shown

    Scenario: Check that 12 results displayed on page
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        When I type 'test3' in a search bar
        And I press 'Enter'
        Then result page is shown
        And there are '12' results on page

    Scenario: Check that 12 more results displayed when pressing show more
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        And I type '1' in a search bar
        And I press 'Enter'
        When result page is shown
        And there are '12' results on page
        Then I click 'show more' button
        And there are '24' results on page

    Scenario: Search result - sort by
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        And I type 'test4' in a search bar
        And I press 'Enter'
        And result page is shown
        When I change sorting to "Most funded"
        Then result is displayed according to sorting
    #There are no UI changes in last step so it's empty

    Scenario: Search result - project timing
        Given I open 'https://www.indiegogo.com/'
        And I click on "search icon"
        And 'search panel' is shown
        And I type 'test5' in a search bar
        And I press 'Enter'
        And result page is shown
        When I change project timing to "Just launched"
        Then result is displayed according to project timing





