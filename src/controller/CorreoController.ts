import CorreoModel from "../model/CorreoModel";
import { EmailAddressInterface } from "../model/Types/CorreoInterface";
import { Request, Response } from "express";
import {
  ConfirmacionCreacionRequest,
  PromocionRequest,
  RecuperacionCuentaRequest,
  SubastaRequest,
} from "../model/Types/RequestInterface";
import TemplateModel from "../model/TemplateModel";

export default class CorreoController {
  private readonly emails: EmailAddressInterface;
  private readonly domain: string;

  constructor(
    private readonly correoModel: CorreoModel,
    private readonly templateModel: TemplateModel
  ) {
    this.domain = "thenexusbattlesii.online";
    this.emails = {
      recuperacion: `recuperacion@${this.domain}`,
      confirmacion: `confirmacion@${this.domain}`,
      subasta: `subasta@${this.domain}`,
      promocion: `promocion@${this.domain}`,
    };
  }

  async sendMail(
    from: string,
    body:
      | ConfirmacionCreacionRequest
      | RecuperacionCuentaRequest
      | PromocionRequest
      | SubastaRequest,
    template: string
  ) {
    const result = await this.correoModel.sendEmail(
      from,
      body.email,
      body.subject,
      body.message,
      template
    );
    return result;
  }

  public async sendEmailRecuperacion(req: Request, res: Response) {
    const body = req.body as RecuperacionCuentaRequest;
    const from = this.emails.recuperacion;
    const template = await this.templateModel.getRecuperarContrasena(body);
    const result = await this.sendMail(from, body, template);
    if (result) {
      res.status(200).json({ message: "Correo enviado" });
    } else {
      res.status(500).json({ message: "Error al enviar el correo" });
    }
  }

  public async sendEmailConfirmacion(req: Request, res: Response) {
    const body = req.body as ConfirmacionCreacionRequest;
    const from = this.emails.confirmacion;
    const template = await this.templateModel.getConfirmarCuenta(body);
    const result = await this.sendMail(from, body, template);
    if (result) {
      res.status(200).json({ message: "Correo enviado" });
    } else {
      res.status(500).json({ message: "Error al enviar el correo" });
    }
  }

  public async sendEmailPromocion(req: Request, res: Response) {
    const body = req.body as PromocionRequest;
    const from = this.emails.promocion;
    const template = await this.templateModel.getPromociones(body);
    const result = await this.sendMail(from, body, template);
    if (result) {
      res.status(200).json({ message: "Correo enviado" });
    } else {
      res.status(500).json({ message: "Error al enviar el correo" });
    }
  }

  public async sendEmailSubasta(req: Request, res: Response) {
    const body = req.body as SubastaRequest;
    const from = this.emails.subasta;
    const template = await this.templateModel.getSubasta(body);
    const result = await this.sendMail(from, body, template);
    if (result) {
      res.status(200).json({ message: "Correo enviado" });
    } else {
      res.status(500).json({ message: "Error al enviar el correo" });
    }
  }
}
