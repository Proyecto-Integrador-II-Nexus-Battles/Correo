import ejs from "ejs";
import fs from "fs";
import path from "path";
import {
  ConfirmarCuentaEJS,
  PromocionesEJS,
  RecuperarContrasenaEJS,
  SubastaEJS,
} from "./Types/emails/EmailEJSInterface";

export default class TemplateModel {
  private readonly recuperarContrasenaTemplate: string;
  private readonly confirmarCuentaTemplate: string;
  private readonly promocionesTemplate: string;
  private readonly subastaTemplate: string;

  constructor() {
    this.recuperarContrasenaTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "..", "view", "RecuperarContrasena.ejs"),
      "utf-8"
    );
    this.confirmarCuentaTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "..", "view", "ConfirmarCuenta.ejs"),
      "utf-8"
    );
    this.promocionesTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "..", "view", "Promociones.ejs"),
      "utf-8"
    );
    this.subastaTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "..", "view", "Subasta.ejs"),
      "utf-8"
    );
  }

  public async getRecuperarContrasena(
    data: RecuperarContrasenaEJS
  ): Promise<string> {
    return ejs.render(this.recuperarContrasenaTemplate, { data });
  }

  public async getConfirmarCuenta(data: ConfirmarCuentaEJS): Promise<string> {
    return ejs.render(this.confirmarCuentaTemplate, { data });
  }

  public async getPromociones(data: PromocionesEJS): Promise<string> {
    return ejs.render(this.promocionesTemplate, { data });
  }

  public async getSubasta(data: SubastaEJS): Promise<string> {
    return ejs.render(this.subastaTemplate, { data });
  }
}
