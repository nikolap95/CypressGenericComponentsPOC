export class InputElement {
    constructor(selector) {
      this.selector = selector;
    }
  
    get() {
      return cy.get(this.selector);
    }
  
    populate(value) {
      this.get().clear().type(value);
      return this;
    }
  
  }