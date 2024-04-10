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
      "/sendEmailRecuperacion",
      this.correoController.sendEmailRecuperacion.bind(this.correoController)
    );
    this.router.post(
      "/sendEmailConfirmacion",
      this.correoController.sendEmailConfirmacion.bind(this.correoController)
    );
    this.router.post(
      "/sendEmailSubasta",
      this.correoController.sendEmailSubasta.bind(this.correoController)
    );
    this.router.post(
      "/sendEmailPromocion",
      this.correoController.sendEmailPromocion.bind(this.correoController)
    );
  }
}
