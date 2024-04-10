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
        this.recuperarContrasenaTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "view", "RecuperarContrasena.ejs"), "utf-8");
        this.confirmarCuentaTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "view", "ConfirmarCuenta.ejs"), "utf-8");
        this.promocionesTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "view", "Promociones.ejs"), "utf-8");
        this.subastaTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "view", "Subasta.ejs"), "utf-8");
    }
    async getRecuperarContrasena() {
        return ejs_1.default.render(this.recuperarContrasenaTemplate, {
            title: "Test Template",
            message: "This is a test template",
        });
    }
    async getConfirmarCuenta() {
        return ejs_1.default.render(this.confirmarCuentaTemplate, {
            title: "Test Template",
            message: "This is a test template",
        });
    }
    async getPromociones() {
        return ejs_1.default.render(this.promocionesTemplate, {
            title: "Test Template",
            message: "This is a test template",
        });
    }
    async getSubasta() {
        return ejs_1.default.render(this.subastaTemplate, {
            title: "Test Template",
            message: "This is a test template",
        });
    }
}
exports.default = TemplateModel;
//# sourceMappingURL=TemplateModel.js.map