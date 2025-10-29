Feature: Tutorial Form Filling

    Scenario: User fills in the form
        Given I open form page
        When I populate "TutorialForm" with following data
            | firstName | email            | state   |
            | Nikola    | nikola@gmail.com | Haryana |
        When I populate "TutorialFormPartTwo" with following data
            | subject      | city |
            | Test Subject | Agra |