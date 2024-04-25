import SmtpConnection from "./SmtpConnection";

export default class CorreoModel {
  constructor(private readonly smtpConnection: SmtpConnection) {}

  public async sendEmail(
    from: string,
    email: string,
    subject: string,
    message: string,
    html: string
  ) {
    try {
      await this.smtpConnection.getSmtpConnection().sendMail({
        from: from,
        to: email,
        subject: subject,
        text: message,
        html: html,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
