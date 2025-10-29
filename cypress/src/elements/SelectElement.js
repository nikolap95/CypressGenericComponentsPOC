export class SelectElement {
    constructor(selector) {
      this.selector = selector;
    }
  
    get() {
      return cy.get(this.selector);
    }
  
    populate(value) {
      this.get().select(value);
      return this;
    }
  
  }