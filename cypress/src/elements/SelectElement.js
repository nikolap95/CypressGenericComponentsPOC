import { BaseElement } from "./BaseElement";

export class SelectElement extends BaseElement {
    constructor(selector) {
      super(selector);
    }
  
    populate(value) {
      this.get().select(value);
      return this;
    }
  
  }