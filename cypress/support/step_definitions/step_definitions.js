import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { createComponentByName } from '../../src/componentFactory';
import { RuntimeVarsHandler } from '../RuntimeVarsHandler';
import dateFormat from "dateformat";
import { DateUtils } from "../DateUtils";

Given("I open form page", () => {
  cy.visit("/selenium/practice/selenium_automation_practice.php");
});

When("I take todays date, add {string} and store as {string} in {string} format", (dateAdjust, varName, format) => {
  const todaysDate = new Date();
  RuntimeVarsHandler.add(varName, dateFormat(DateUtils.applyDateOffset(todaysDate, dateAdjust), format));
});

When("I populate {string} with following data", (componentName, dataTable) => {
    createComponentByName(componentName).populate(dataTable);
});