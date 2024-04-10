import nodemailer, { TransportOptions, Transporter } from "nodemailer";
import CorreoConfig from "../config/CorreoConfig";

export default class SmtpConnection {
  private smtpConnection: Transporter;

  constructor() {
    this.smtpConnection = nodemailer.createTransport({
      host: CorreoConfig.SMTP_SERVER,
      port: 587,
      secure: false,
      auth: {
        user: CorreoConfig.LOGIN,
        pass: CorreoConfig.PASSWORD,
      },
    } as TransportOptions);
  }

  public getSmtpConnection(): Transporter {
    return this.smtpConnection;
  }
}
