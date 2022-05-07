import nodemailer from "nodemailer";
import { MailProvider, SendMailData } from "./mail-provider";
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb6965a7069a40",
    pass: "5ac929a9982bd7",
  },
});

export class NodemailerMailProvider implements MailProvider {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <no-reply@gmail.com>",
      to: "Matheus <mthsdasil@gmail.com>",
      subject,
      html: body,
    });
  }
}
