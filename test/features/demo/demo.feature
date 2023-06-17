Feature: Demo feature

    @demo @smoke
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |


  
    Scenario Outline: Demo Web Interactions
        Given A web page is opened
        When Perform web interactions
        

        Examples:
            | TestID     |
            | DEMO_TC002 |           