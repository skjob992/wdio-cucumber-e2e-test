Feature: Web Interactions

   @demo @smoke
    Scenario Outline: Demo Inventory
        Given Login to inventory web app
       # Then Inventory page should list <NumberOfProducts>
       # Then Validate all products have valid price
        

        Examples:
            | TestID          |NumberOfProducts|
            | Inventory_TC001 | 6              |