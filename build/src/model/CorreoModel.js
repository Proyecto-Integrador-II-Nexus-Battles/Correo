"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CorreoModel {
    smtpConnection;
    constructor(smtpConnection) {
        this.smtpConnection = smtpConnection;
    }
    async sendEmail(from, email, subject, message, html) {
        try {
            await this.smtpConnection.getSmtpConnection().sendMail({
                from: from,
                to: email,
                subject: subject,
                text: message,
                html: html,
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
exports.default = CorreoModel;
//# sourceMappingURL=CorreoModel.js.map