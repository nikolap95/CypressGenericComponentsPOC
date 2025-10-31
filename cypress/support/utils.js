import { RuntimeVarsHandler } from "./RuntimeVarsHandler";

export class Utils {
    
    static handleVarsInString(value) {
        return value.replace(/\$\{([^}]+)\}/g, (match, key) => {
            if (RuntimeVarsHandler.has(key)) {
              return RuntimeVarsHandler.get(key);
            }
            return match;
        });
    }
}