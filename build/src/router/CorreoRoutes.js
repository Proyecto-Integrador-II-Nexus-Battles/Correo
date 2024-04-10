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
        this.router.post("/sendEmailRecuperacion", this.correoController.sendEmailRecuperacion.bind(this.correoController));
        this.router.post("/sendEmailConfirmacion", this.correoController.sendEmailConfirmacion.bind(this.correoController));
        this.router.post("/sendEmailSubasta", this.correoController.sendEmailSubasta.bind(this.correoController));
        this.router.post("/sendEmailPromocion", this.correoController.sendEmailPromocion.bind(this.correoController));
    }
}
exports.default = CorreoRoutes;
//# sourceMappingURL=CorreoRoutes.js.map