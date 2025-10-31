Feature: Tutorial Form Filling

    Scenario: User fills in the form
        Given I open form page
        When I take todays date, add "+1y" and store as "nextYear" in "yyyy-mm-dd" format
        And I populate "TutorialForm" with following data
            | firstName | email            | state   | dateOfBirth |
            | Nikola    | random@gmail.com | Haryana | ${nextYear} |
        And I populate "TutorialFormPartTwo" with following data
            | subject      | city  |
            | Test Subject | Agra |