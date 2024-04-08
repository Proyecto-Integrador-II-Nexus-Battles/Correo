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
      "/sendEmailInfo",
      this.correoController.sendEmailInfo.bind(this.correoController)
    );
  }
}
