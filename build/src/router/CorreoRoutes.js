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
        this.router.post("/send/recuperacion", this.correoController.sendEmailRecuperacion.bind(this.correoController));
        this.router.post("/send/confirmacion", this.correoController.sendEmailConfirmacion.bind(this.correoController));
        this.router.post("/send/subasta", this.correoController.sendEmailSubasta.bind(this.correoController));
        this.router.post("/send/promocion", this.correoController.sendEmailPromocion.bind(this.correoController));
    }
}
exports.default = CorreoRoutes;
//# sourceMappingURL=CorreoRoutes.js.map