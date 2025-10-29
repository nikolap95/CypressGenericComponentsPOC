import { BaseElement } from "./BaseElement";

export class InputElement extends BaseElement {
    constructor(selector) {
      super(selector);
    }
  
    populate(value) {
      this.get().clear().type(value);
      return this;
    }
  
  }