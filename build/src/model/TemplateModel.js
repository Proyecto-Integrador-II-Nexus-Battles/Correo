"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class TemplateModel {
    testTemplate;
    constructor() {
        this.testTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, "view", "TestTemplate.ejs"), "utf-8");
    }
    async getTestTemplate() {
        return ejs_1.default.render(this.testTemplate, {
            title: "Test Template",
            message: "This is a test template",
        });
    }
}
exports.default = TemplateModel;
//# sourceMappingURL=TemplateModel.js.map