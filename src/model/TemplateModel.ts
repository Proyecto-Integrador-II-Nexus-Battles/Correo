import ejs from "ejs";
import fs from "fs";
import path from "path";

export default class TemplateModel {
  private readonly recuperarContrasenaTemplate: string;
  private readonly confirmarCuentaTemplate: string;
  private readonly promocionesTemplate: string;

  constructor() {
    this.recuperarContrasenaTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "view", "RecuperarContrasena.ejs"),
      "utf-8"
    );
    this.confirmarCuentaTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "view", "ConfirmarCuenta.ejs"),
      "utf-8"
    );
    this.promocionesTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "view", "Promociones.ejs"),
      "utf-8"
    );
  }

  public async getRecuperarContrasena(): Promise<string> {
    return ejs.render(this.recuperarContrasenaTemplate, {
      title: "Test Template",
      message: "This is a test template",
    });
  }

  public async getConfirmarCuenta(): Promise<string> {
    return ejs.render(this.confirmarCuentaTemplate, {
      title: "Test Template",
      message: "This is a test template",
    });
  }

  public async getPromociones(): Promise<string> {
    return ejs.render(this.promocionesTemplate, {
      title: "Test Template",
      message: "This is a test template",
    });
  }
}
