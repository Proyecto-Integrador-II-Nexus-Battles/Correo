import express from "express";
import CorreoRoutes from "./router/CorreoRoutes";
import config from "./config/CorreoConfig";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import http from "http";
import https from "https";
import CorreoController from "./controller/CorreoController";
import CorreoModel from "./model/CorreoModel";
import SmtpConnection from "./model/SmtpConnection";
import TemplateModel from "./model/TemplateModel";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const correoRoutes = new CorreoRoutes(
  new CorreoController(
    new CorreoModel(new SmtpConnection()),
    new TemplateModel()
  )
);
app.use("/correo", correoRoutes.router);

const options = {
  key: fs.readFileSync("certs/privkey.pem"),
  cert: fs.readFileSync("certs/cert.pem"),
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(config.APP_PORT);
console.log("Server on port", config.APP_PORT);
