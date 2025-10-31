import { Utils } from "../../support/utils";

export class BaseComponent {

    elements;

    populate(dataTable) {
        var raw = dataTable.raw();
        var headers = raw[0];
        var fields = raw[1];

        for(var i=0; i<headers.length; i++) {
            this.elements[headers[i]].populate(Utils.handleVarsInString(fields[i]));
        }
    }
    capture() {}
    validate() {}
    waitForValue() {}
    validateState() {}
}