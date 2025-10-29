import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { createComponentByName } from '../../src/componentFactory';

Given("I open form page", () => {
  cy.visit("/selenium/practice/selenium_automation_practice.php");
});

When("I populate {string} with following data", (componentName, dataTable) => {
    createComponentByName(componentName).populate(dataTable);
});