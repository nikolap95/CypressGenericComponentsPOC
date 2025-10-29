export class BaseElement {
    
    selector;

    constructor(selector) {
        this.selector = selector;
    }

    get() {
        return cy.get(this.selector);
    }
}