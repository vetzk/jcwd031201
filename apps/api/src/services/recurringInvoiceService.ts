import { CronJob } from 'cron';
import prisma from '@/prisma'; // Update with your actual prisma import path
import { generatePdfInvoice } from '../utils/generatePdfInvoice'; //
import { sendInvoiceEmail } from '../utils/invoiceEmail'; //
export async function sendRecurringInvoices() {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    console.log(`Start of day: ${startOfDay}`);
    console.log(`End of day: ${endOfDay}`);

    const invoicesToSend = await prisma.invoice.findMany({
      where: {
        nextInvoiceDate: {
          gte: startOfDay, // greater than or equal to the start of today
          lte: endOfDay, // less than or equal to the end of today
        },
        invoiceStatus: 'UNPAID',
      },
      include: {
        client: true,
        invoicedetail: {
          include: {
            product: true,
          },
        },
      },
    });

    console.log(invoicesToSend);

    for (const invoice of invoicesToSend) {
      const pdfBuffer = await generatePdfInvoice(invoice);
      await sendInvoiceEmail(invoice.client.email, 'Recurring Invoice', null, {
        email: invoice.client.email,
        pdfBuffer,
      });
      const newNextInvoiceDate = new Date(invoice.nextInvoiceDate);
      newNextInvoiceDate.setDate(
        newNextInvoiceDate.getDate() + invoice.recurringDays,
      );

      const invoiceUpdate = await prisma.invoice.update({
        where: { id: invoice.id },
        data: {
          nextInvoiceDate: newNextInvoiceDate,
        },
      });
      console.log(invoiceUpdate);
    }
  } catch (error) {
    console.error('Error sending recurring invoices:', error);
  }
}
