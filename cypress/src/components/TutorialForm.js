import { BaseComponent } from "./BaseComponent";
import { InputElement } from "../elements/InputElement";
import { SelectElement } from "../elements/SelectElement";

export class TutorialForm extends BaseComponent {

    constructor() {
        super();
        this.elements = {
            firstName: new InputElement("#name"),
            email: new InputElement("#email"),
            state: new SelectElement("#state"),
            dateOfBirth: new InputElement("#dob")
        }
    }
}