import { BaseComponent } from "./BaseComponent";
import { InputElement } from "../elements/InputElement";
import { SelectElement } from "../elements/SelectElement";

export class TutorialFormPartTwo extends BaseComponent {

    constructor() {
        super();
        this.elements = {
            subject: new InputElement("#subjects"),
            city: new SelectElement("#city")
        }
    }
}