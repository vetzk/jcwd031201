import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILER,
    pass: process.env.PASS_MAILER,
  },
});

export const sendResetEmail = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { email: string; token: string },
) => {
  try {
    const urlLink = `http://localhost:3000/reset-password/${data?.token}`;
    const templatePath = path.join(__dirname, '../templates', 'resetPass.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const compileTemplates = handlebars.compile(templateSource);
    const generateTemplate = compileTemplates({ ...data, urlLink });

    await transporter.sendMail({
      from: process.env.MAILER,
      to: emailTo,
      subject,
      html: generateTemplate,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
