"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CorreoController {
    correoModel;
    templateModel;
    emails;
    domain;
    constructor(correoModel, templateModel) {
        this.correoModel = correoModel;
        this.templateModel = templateModel;
        this.domain = "thenexusbattlesii.online";
        this.emails = {
            recuperacion: `recuperacion@${this.domain}`,
            confirmacion: `confirmacion@${this.domain}`,
            subasta: `subasta@${this.domain}`,
            promocion: `promocion@${this.domain}`,
        };
    }
    async sendMail(from, body, template) {
        const result = await this.correoModel.sendEmail(from, body.email, body.subject, body.message, template);
        return result;
    }
    async sendEmailRecuperacion(req, res) {
        const body = req.body;
        const from = this.emails.recuperacion;
        const template = await this.templateModel.getRecuperarContrasena(body);
        const result = await this.sendMail(from, body, template);
        if (result) {
            res.status(200).json({ message: "Correo enviado" });
        }
        else {
            res.status(500).json({ message: "Error al enviar el correo" });
        }
    }
    async sendEmailConfirmacion(req, res) {
        const body = req.body;
        const from = this.emails.confirmacion;
        const template = await this.templateModel.getConfirmarCuenta(body);
        const result = await this.sendMail(from, body, template);
        if (result) {
            res.status(200).json({ message: "Correo enviado" });
        }
        else {
            res.status(500).json({ message: "Error al enviar el correo" });
        }
    }
    async sendEmailPromocion(req, res) {
        const body = req.body;
        const from = this.emails.promocion;
        const template = await this.templateModel.getPromociones(body);
        const result = await this.sendMail(from, body, template);
        if (result) {
            res.status(200).json({ message: "Correo enviado" });
        }
        else {
            res.status(500).json({ message: "Error al enviar el correo" });
        }
    }
    async sendEmailSubasta(req, res) {
        const body = req.body;
        const from = this.emails.subasta;
        const template = await this.templateModel.getSubasta(body);
        const result = await this.sendMail(from, body, template);
        if (result) {
            res.status(200).json({ message: "Correo enviado" });
        }
        else {
            res.status(500).json({ message: "Error al enviar el correo" });
        }
    }
}
exports.default = CorreoController;
//# sourceMappingURL=CorreoController.js.map