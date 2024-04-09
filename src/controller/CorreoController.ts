import CorreoModel from "../model/CorreoModel";
import { EmailInterface } from "../model/Types/CorreoInterface";
import { Request, Response } from "express";
import { SendEmailInfoRequest } from "../model/Types/RequestInterface";
import TemplateModel from "../model/TemplateModel";

export default class CorreoController {
  private readonly emails: EmailInterface;

  constructor(
    private readonly correoModel: CorreoModel,
    private readonly templateModel: TemplateModel
  ) {
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

  public async sendEmailInfo(req: Request, res: Response) {
    const body = req.body as SendEmailInfoRequest;
    const from = this.emails.info.user;
    const template = await this.templateModel.getTestTemplate();
    const result = await this.correoModel.sendEmail(
      from,
      body.email,
      body.subject,
      body.message,
      template
    );
    if (result) {
      res.status(200).json({ message: "Correo enviado" });
    } else {
      res.status(500).json({ message: "Error al enviar el correo" });
    }
  }
}
