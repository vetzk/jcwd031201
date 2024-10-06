import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import puppeteer from 'puppeteer';
import fs from 'fs';
import { v4 as uuid } from 'uuid';
import archiver from 'archiver';
import { sendInvoiceEmail } from '@/utils/invoiceEmail';

export class InvoiceController {
  async createInvoice(req: Request, res: Response, next: NextFunction) {
    const {
      productCodes,
      paymentCode,
      invoiceStatus,
      clientCode,
      name,
      address,
      phone,
      email,
      qtys,
      paymentType,
      bankAccount,
      accountName,
      accountNumber,
      clientPayment,
      lastName,
      firstName,
      addRecurringDate,
      date,
      companyName,
      userAddress,
      userPhone,
    } = req.body;

    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      if (
        !Array.isArray(productCodes) ||
        !Array.isArray(qtys) ||
        productCodes.length !== qtys.length
      ) {
        return res.status(400).send({
          success: false,
          message:
            'Product IDs and quantities must be arrays of the same length',
        });
      }

      const findProducts = await prisma.product.findMany({
        where: {
          productCode: { in: productCodes },
        },
      });

      console.log(findProducts);

      if (!findProducts || findProducts.length !== productCodes.length) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find your products',
        });
      }

      let totalAmount = 0;
      let subTotal = 0;

      for (let i = 0; i < findProducts.length; i++) {
        const product = findProducts[i];
        const qty = qtys[i];
        totalAmount += product.price * qty;
        subTotal += product.price * qty;
      }

      // Prisma transaction for invoice, client, and payment details
      const result = await prisma.$transaction(async (prisma) => {
        let findPaymentType = await prisma.paymentdetails.findUnique({
          where: {
            paymentCode,
          },
        });

        if (!findPaymentType) {
          const findPayment = await prisma.paymentoptions.findFirst({
            where: {
              paymentType,
            },
          });

          if (!findPayment) {
            return res.status(404).send({
              success: false,
              message: 'Cannot find payment type',
            });
          }
          if (findPayment.paymentType === 'CASH') {
            findPaymentType = await prisma.paymentdetails.create({
              data: {
                paymentCode: 'PDT-' + uuid(),
                paymentOptId: findPayment.id,
                userId: findUser.id,
              },
            });
          } else {
            findPaymentType = await prisma.paymentdetails.create({
              data: {
                paymentOptId: findPayment.id,
                paymentCode: 'PDT-' + uuid(),
                bankAccount,
                accountName,
                accountNumber,
                userId: findUser.id,
              },
            });
          }
        }

        const cliCode = 'CLI-' + uuid();
        const findClientPayment = await prisma.clientpayment.findFirst({
          where: {
            paymentMethod: clientPayment,
          },
        });

        if (!findClientPayment) {
          return res.status(404).send({
            success: false,
            message: 'Cannot find payment method',
          });
        }
        let findClient = await prisma.client.findUnique({
          where: { clientCode },
        });

        if (!findClient) {
          findClient = await prisma.client.create({
            data: {
              clientCode: cliCode,
              name,
              address,
              phone,
              email,
              payId: findClientPayment?.id,
              userId: findUser.id,
            },
          });
        }

        const invCode = 'INV-' + uuid();
        const newDate = new Date(date);
        console.log(date);
        console.log(addRecurringDate);

        newDate.setDate(newDate.getDate() + Number(addRecurringDate));

        console.log(newDate);

        const newInvoice = await prisma.invoice.create({
          data: {
            invoiceCode: invCode,
            invoiceDate: date,
            nextInvoiceDate: newDate,
            invoiceStatus: invoiceStatus || 'UNPAID',
            totalAmount,
            subTotal,
            recurringDays: Number(addRecurringDate),
            paymentId: findPaymentType.id,
            userId: findUser.id,
            clientId: findClient.id,
          },
        });

        const newInvoiceDetails = [];

        for (let i = 0; i < findProducts.length; i++) {
          const product = findProducts[i];
          const qty = qtys[i];

          const newInvoiceDetail = await prisma.invoicedetail.create({
            data: {
              productId: product.id,
              invoiceId: newInvoice.id,
              qty,
              priceUnit: product.price,
              priceTotal: product.price * qty,
            },
          });

          newInvoiceDetails.push(newInvoiceDetail);
          console.log(newInvoiceDetails);
        }

        return { newInvoice, newInvoiceDetails };
      });

      return res.status(200).send({
        success: true,
        message: 'Success to create your invoice',
        result: result,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot create your invoice',
        error,
      });
    }
  }

  async getInvoice(req: Request, res: Response, next: NextFunction) {
    const {
      search,
      startDate,
      endDate,
      page = 1,
      limit = 10,
      invoiceStatus,
    } = req.query;
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
        });
      }

      let searchResult = {};

      if (search) {
        searchResult = {
          OR: [
            { invoiceCode: { contains: String(search), mode: 'insensitive' } },
            {
              client: {
                name: { contains: String(search), mode: 'insensitive' },
              },
            },
          ],
        };
      }

      if (startDate || endDate) {
        const start = startDate
          ? new Date(String(startDate))
          : new Date('1970-01-01');
        const end = startDate ? new Date(String(endDate)) : new Date();

        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
          searchResult = {
            ...searchResult,
            invoiceDate: {
              gte: start,
              lte: end,
            },
          };
        } else {
          return res.status(400).send({
            success: false,
            message: 'Invalid date format',
          });
        }
      }

      if (invoiceStatus) {
        // Make sure the value is valid by checking the enum type
        const validStatuses = ['PAID', 'UNPAID', 'OVERDUE'];
        if (!validStatuses.includes(String(invoiceStatus))) {
          return res.status(400).send({
            success: false,
            message: 'Invalid invoice status',
          });
        }

        // Add the invoiceStatus filter
        searchResult = {
          ...searchResult,
          invoiceStatus: String(invoiceStatus),
        };
      }

      const findAllInvoiceUser = await prisma.invoice.findMany({
        where: {
          ...searchResult,
          userId: findUser.id,
          isDeleted: false,
        },
        include: {
          client: true,
          invoicedetail: {
            include: {
              product: true,
            },
          },
        },
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
      });

      const totalInvoices = await prisma.invoice.count({
        where: {
          ...searchResult,
          isDeleted: false,
          userId: findUser.id,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Find invoice success',
        result: findAllInvoiceUser,
        total: totalInvoices,
        page: Number(page),
        limit: Number(limit),
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get your invoice',
        error,
      });
    }
  }

  async getInvoiceDetails(req: Request, res: Response, next: NextFunction) {
    const { invoiceCode } = req.params;
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const findInvoiceDetails = await prisma.invoice.findMany({
        where: {
          invoiceCode,
          userId: findUser.id,
        },
        include: {
          invoicedetail: {
            include: {
              product: true,
            },
          },
          client: {
            include: {
              clientpayment: true,
            },
          },
          paymentdetails: true,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Success to get invoice details',
        result: findInvoiceDetails,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get invoice details',
        error,
      });
    }
  }

  async updateInvoice(req: Request, res: Response, next: NextFunction) {
    const {
      productCodes,
      clientPayment,
      clientCode,
      invoiceStatus,
      nextInvoiceDate,
      addRecurringDate,
      name,
      address,
      phone,
      email,
      qtys,
    } = req.body;

    const { invoiceCode } = req.params;

    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const findInvoice = await prisma.invoice.findUnique({
        where: {
          invoiceCode,
        },
      });

      if (!findInvoice) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find your invoice',
        });
      }

      if (
        !Array.isArray(productCodes) ||
        !Array.isArray(qtys) ||
        productCodes.length !== qtys.length
      ) {
        return res.status(400).send({
          success: false,
          message:
            'Product IDs and quantities must be arrays of the same length',
        });
      }

      const findProducts = await prisma.product.findMany({
        where: {
          productCode: { in: productCodes },
        },
      });

      console.log(findProducts);

      if (!findProducts || findProducts.length !== productCodes.length) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find your products',
        });
      }

      let totalAmount = 0;
      let subTotal = 0;

      for (let i = 0; i < findProducts.length; i++) {
        const product = findProducts[i];
        const qty = qtys[i];
        totalAmount += product.price * qty;
        subTotal += product.price * qty;
      }

      const findInvoiceDetails = await prisma.invoicedetail.findMany({
        where: {
          invoiceId: findInvoice.id,
        },
      });

      if (!findInvoiceDetails) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find invoice details',
        });
      }

      let newNextInvoiceDate = findInvoice.nextInvoiceDate;
      if (addRecurringDate) {
        newNextInvoiceDate = new Date();
        newNextInvoiceDate.setDate(
          newNextInvoiceDate.getDate() + Number(addRecurringDate),
        );
      }

      const result = await prisma.$transaction(async (prisma) => {
        let findClient = await prisma.client.findUnique({
          where: {
            clientCode,
          },
        });

        const cliCode = 'CLI-' + uuid();

        const findClientPayment = await prisma.clientpayment.findFirst({
          where: {
            paymentMethod: clientPayment,
          },
        });

        if (!findClientPayment) {
          return res.status(404).send({
            success: false,
            message: 'Cannot find payment method',
          });
        }

        if (!findClient) {
          findClient = await prisma.client.create({
            data: {
              name,
              address,
              clientCode: cliCode,
              phone,
              email,
              payId: findClientPayment.id,
              userId: findUser.id,
            },
          });
        } else {
          findClient = await prisma.client.update({
            data: {
              name,
              address,
              phone,
              email,
              payId: findClientPayment.id,
            },
            where: {
              id: findClient.id,
            },
          });
        }

        const updatedInvoice = await prisma.invoice.update({
          data: {
            invoiceStatus: invoiceStatus || findInvoice.invoiceStatus,
            nextInvoiceDate: nextInvoiceDate || newNextInvoiceDate,
            totalAmount,
            recurringDays: Number(addRecurringDate),
            subTotal,
            clientId: findClient.id,
          },
          where: {
            id: findInvoice.id,
          },
        });

        // Update or create invoice details for each product
        const updateInvoiceDetails = [];

        for (let i = 0; i < findProducts.length; i++) {
          const product = findProducts[i];
          const qty = qtys[i];

          const existingDetail = findInvoiceDetails[i];

          let updateInvoiceDetail;
          if (existingDetail) {
            // Update existing detail
            updateInvoiceDetail = await prisma.invoicedetail.update({
              data: {
                productId: product.id,
                qty,
                priceUnit: product.price,
                priceTotal: product.price * qty,
              },
              where: {
                id: existingDetail.id,
              },
            });
          } else {
            // Create new detail for product
            updateInvoiceDetail = await prisma.invoicedetail.create({
              data: {
                productId: product.id,
                invoiceId: updatedInvoice.id,
                qty,
                priceUnit: product.price,
                priceTotal: product.price * qty,
              },
            });
          }

          updateInvoiceDetails.push(updateInvoiceDetail);
          console.log(updateInvoiceDetails);
        }

        return { updatedInvoice, updateInvoiceDetails };
      });

      return res.status(200).send({
        success: true,
        message: 'Update Invoice Success',
        result: result,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot update your invoice',
        error,
      });
    }
  }

  async deleteInvoice(req: Request, res: Response, next: NextFunction) {
    const { invoiceCodes } = req.body;
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const findInvoices = await prisma.invoice.findMany({
        where: {
          invoiceCode: { in: invoiceCodes },
          userId: findUser.id,
        },
      });

      if (findInvoices.length === 0) {
        return res.status(404).send({
          success: false,
          message: 'No selected invoices to be deleted',
        });
      }

      await prisma.invoice.updateMany({
        where: {
          invoiceCode: { in: invoiceCodes },
          userId: findUser.id,
        },
        data: {
          isDeleted: true,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Invoices have been deleted',
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot delete invoice',
        error,
      });
    }
  }

  async downloadInvoice(req: Request, res: Response, next: NextFunction) {
    const { invoiceCodes } = req.body;
    console.log(invoiceCodes);

    try {
      if (!invoiceCodes || invoiceCodes.length === 0) {
        return res.status(400).send({
          success: false,
          message: 'No invoice codes provided',
        });
      }

      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const selectedInvoices = await prisma.invoice.findMany({
        where: {
          invoiceCode: { in: invoiceCodes },
          userId: findUser.id,
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

      if (!selectedInvoices) {
        return res.status(404).send({
          success: false,
          message: 'No invoices found',
        });
      }

      console.log('Launching Puppeteer...');

      const browser = await puppeteer.launch({
        headless: true,
      });
      const archive = archiver('zip', { zlib: { level: 9 } });

      res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename=selected_invoices.zip',
      });

      archive.pipe(res);
      for (const invoice of selectedInvoices) {
        const page = await browser.newPage();

        const content = `
    <html>
      <body>
        <h1>Invoice Code: ${invoice.invoiceCode}</h1>
        <p>Client: ${invoice.client.name}</p>
        <p>Date: ${new Date(invoice.invoiceDate).toLocaleDateString()}</p>
        <p>Status: ${invoice.invoiceStatus}</p>
        <p>Total Amount: ${new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(invoice.totalAmount)}</p>
        <h2>Invoice Details:</h2>
        <ul>
          ${invoice.invoicedetail
            .map(
              (detail) => `
            <li>
              Product: ${detail.product.name}, 
              Quantity: ${detail.qty}, 
              Price: ${new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(detail.priceTotal)}
            </li>
          `,
            )
            .join('')}
        </ul>
      </body>
    </html>
      `;

        await page.setContent(content, { waitUntil: 'networkidle0' }); // Wait until the network is idle (optional)

        const pdfBuffer = await page.pdf({
          format: 'A4',
          printBackground: true,
        });

        archive.append(Buffer.from(pdfBuffer), {
          name: `invoice${invoice.invoiceCode}.pdf`,
        });

        await page.close();
      }

      await browser.close();
      archive.finalize();

      // res.set({
      //   'Content-Type': 'application/pdf',
      //   'Content-Disposition': 'attachment; filename=selected_invoices.pdf',
      //   'Content-Length': pdfBuffer.length,
      // });

      // return res.end(pdfBuffer);
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot download your invoice',
        error,
      });
    }
  }

  async sendInvoice(req: Request, res: Response, next: NextFunction) {
    const { invoiceCode, email } = req.body;
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const findInvoice = await prisma.invoice.findUnique({
        where: {
          invoiceCode,
          userId: findUser.id,
        },
        include: {
          client: true,
          invoicedetail: {
            include: { product: true },
          },
        },
      });

      if (!findInvoice) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find invoice',
        });
      }

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.setContent(
        `<html>
        <body>
        <h1> Hello, this is your invoice</h1>
          <h1>Invoice Code: ${findInvoice.invoiceCode}</h1>
          <p>Client: ${findInvoice.client.name}</p>
          <p>Date: ${new Date(findInvoice.invoiceDate).toLocaleDateString()}</p>
          <p>Status: ${findInvoice.invoiceStatus}</p>
          <p>Total Amount: ${new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(findInvoice.totalAmount)}</p>
        <h2>Invoice Details:</h2>
        <table border="1" cellpadding="10" cellspacing="0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${findInvoice.invoicedetail
              .map(
                (detail: any) => `
                <tr>
                  <td>${detail.product.name}</td>
                  <td>${detail.qty}</td>
                  <td>${new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(detail.priceTotal)}</td>
                </tr>`,
              )
              .join('')}
          </tbody>
        </table>

        </body>
      </html>`,
      );

      const pdfBuffer = await page.pdf({ format: 'A4' });
      await browser.close();

      await sendInvoiceEmail(email, 'Your Invoice PDF', null, {
        email,
        pdfBuffer,
      });

      res.status(200).send({
        success: true,
        message: 'invoice sent success',
      });
    } catch (error) {
      next({
        success: false,
        message: 'Cannot send invoice',
        error,
      });
    }
  }
}
