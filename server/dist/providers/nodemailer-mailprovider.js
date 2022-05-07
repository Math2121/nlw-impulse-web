"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "eb6965a7069a40",
        pass: "5ac929a9982bd7",
    },
});
class NodemailerMailProvider {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <no-reply@gmail.com>",
            to: "Matheus <mthsdasil@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailProvider = NodemailerMailProvider;
