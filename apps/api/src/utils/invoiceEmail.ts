import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILER,
    pass: process.env.PASS_MAILER,
  },
});

export const sendInvoiceEmail = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { email: string; pdfBuffer: any },
) => {
  try {
    await transporter.sendMail({
      from: process.env.MAILER,
      to: emailTo,
      subject,
      text: 'Please find your invoice attached.',
      attachments: [
        {
          filename: 'invoice.pdf',
          content: data?.pdfBuffer,
        },
      ],
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
