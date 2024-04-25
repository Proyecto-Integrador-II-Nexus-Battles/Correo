"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CorreoRoutes_1 = __importDefault(require("./router/CorreoRoutes"));
const CorreoConfig_1 = __importDefault(require("./config/CorreoConfig"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const CorreoController_1 = __importDefault(require("./controller/CorreoController"));
const CorreoModel_1 = __importDefault(require("./model/CorreoModel"));
const SmtpConnection_1 = __importDefault(require("./model/SmtpConnection"));
const TemplateModel_1 = __importDefault(require("./model/TemplateModel"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
const correoRoutes = new CorreoRoutes_1.default(new CorreoController_1.default(new CorreoModel_1.default(new SmtpConnection_1.default()), new TemplateModel_1.default()));
app.use("/correo", correoRoutes.router);
const options = {
    key: fs_1.default.readFileSync("certs/privkey.pem"),
    cert: fs_1.default.readFileSync("certs/cert.pem"),
};
http_1.default.createServer(app).listen(80);
https_1.default.createServer(options, app).listen(CorreoConfig_1.default.APP_PORT);
console.log("Server on port", CorreoConfig_1.default.APP_PORT);
//# sourceMappingURL=index.js.map