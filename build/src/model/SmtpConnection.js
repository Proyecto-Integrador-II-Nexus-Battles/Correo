"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const CorreoConfig_1 = __importDefault(require("../config/CorreoConfig"));
class SmtpConnection {
    smtpConnection;
    constructor() {
        this.smtpConnection = nodemailer_1.default.createTransport({
            host: CorreoConfig_1.default.SMTP_SERVER,
            port: 587,
            secure: false,
            auth: {
                user: CorreoConfig_1.default.LOGIN,
                pass: CorreoConfig_1.default.PASSWORD,
            },
        });
    }
    getSmtpConnection() {
        return this.smtpConnection;
    }
}
exports.default = SmtpConnection;
//# sourceMappingURL=SmtpConnection.js.map