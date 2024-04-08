"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CorreoController {
    correoModel;
    templateModel;
    emails;
    constructor(correoModel, templateModel) {
        this.correoModel = correoModel;
        this.templateModel = templateModel;
        this.emails = {
            info: {
                user: "info@thenexusbattlesii.online",
                password: "river12titopare",
            },
            promo: {
                user: "promo@thenexusbattlesii.online",
                password: "promo123",
            },
            subasta: {
                user: "subasta@thenexusbattlesii.online",
                password: "subasta123",
            },
        };
    }
    async sendEmailInfo(req, res) {
        const body = req.body;
        const from = this.emails.info.user;
        const template = await this.templateModel.getTestTemplate();
        const result = await this.correoModel.sendEmail(from, body.email, body.subject, body.message, template);
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