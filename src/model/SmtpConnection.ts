import nodemailer, { TransportOptions, Transporter } from "nodemailer";

export default class SmtpConnection {
  private smtpConnection: Transporter;

  constructor() {
    this.smtpConnection = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "santicarivera@gmail.com",
        pass: "LgITKWj5pDwbn2FH",
      },
    } as TransportOptions);
  }

  public getSmtpConnection(): Transporter {
    return this.smtpConnection;
  }
}
