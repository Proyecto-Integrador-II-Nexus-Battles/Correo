"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Modulo especial que se llama router
class CorreoRoutes {
    correoController;
    router;
    constructor(correoController) {
        this.correoController = correoController;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/sendEmailInfo", this.correoController.sendEmailInfo.bind(this.correoController));
    }
}
exports.default = CorreoRoutes;
//# sourceMappingURL=CorreoRoutes.js.map