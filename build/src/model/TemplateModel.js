"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class TemplateModel {
    recuperarContrasenaTemplate;
    confirmarCuentaTemplate;
    promocionesTemplate;
    subastaTemplate;
    constructor() {
        this.recuperarContrasenaTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "..", "view", "RecuperarContrasena.ejs"), "utf-8");
        this.confirmarCuentaTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "..", "view", "ConfirmarCuenta.ejs"), "utf-8");
        this.promocionesTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "..", "view", "Promociones.ejs"), "utf-8");
        this.subastaTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "..", "view", "Subasta.ejs"), "utf-8");
    }
    async getRecuperarContrasena(data) {
        return ejs_1.default.render(this.recuperarContrasenaTemplate, { data });
    }
    async getConfirmarCuenta(data) {
        return ejs_1.default.render(this.confirmarCuentaTemplate, { data });
    }
    async getPromociones(data) {
        return ejs_1.default.render(this.promocionesTemplate, { data });
    }
    async getSubasta(data) {
        return ejs_1.default.render(this.subastaTemplate, { data });
    }
}
exports.default = TemplateModel;
//# sourceMappingURL=TemplateModel.js.map