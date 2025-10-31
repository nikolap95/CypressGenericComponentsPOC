export class RuntimeVarsHandler {
    static #map = new Map();
  
    static add(key, value) { this.#map.set(String(key), String(value)); }
    static get(key) {
        return this.#map.get(String(key)); }
    static has(key)        { return this.#map.has(String(key)); }
    static delete(key)     { this.#map.delete(String(key)); }
    static clear()         { this.#map.clear(); }
    static entries()       { return Array.from(this.#map.entries()); }
    static toJSON()        { return Object.fromEntries(this.#map); }
  }