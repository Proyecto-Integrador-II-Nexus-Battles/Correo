import { Router } from "express"; //Modulo especial que se llama router
import CorreoController from "../controller/CorreoController";

export default class CorreoRoutes {
  public readonly router: Router;

  constructor(private readonly correoController: CorreoController) {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post(
      "/send/recuperacion",
      this.correoController.sendEmailRecuperacion.bind(this.correoController)
    );
    this.router.post(
      "/send/confirmacion",
      this.correoController.sendEmailConfirmacion.bind(this.correoController)
    );
    this.router.post(
      "/send/subasta",
      this.correoController.sendEmailSubasta.bind(this.correoController)
    );
    this.router.post(
      "/send/promocion",
      this.correoController.sendEmailPromocion.bind(this.correoController)
    );
  }
}
