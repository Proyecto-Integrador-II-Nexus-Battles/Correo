"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class SmtpConnection {
    smtpConnection;
    constructor() {
        this.smtpConnection = nodemailer_1.default.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: "santicarivera@gmail.com",
                pass: "LgITKWj5pDwbn2FH",
            },
        });
    }
    getSmtpConnection() {
        return this.smtpConnection;
    }
}
exports.default = SmtpConnection;
//# sourceMappingURL=SmtpConnection.js.map