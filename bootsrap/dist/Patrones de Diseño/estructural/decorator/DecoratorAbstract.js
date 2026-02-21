"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecoratorAbstract {
    agua;
    constructor(agua) {
        this.agua = agua;
    }
    beber() {
        return this.agua.beber();
    }
    servir() {
        return this.agua.servir();
    }
}
exports.default = DecoratorAbstract;
//# sourceMappingURL=DecoratorAbstract.js.map