"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const uuid_1 = require("uuid");
const archiver_1 = __importDefault(require("archiver"));
const invoiceEmail_1 = require("../utils/invoiceEmail");
class InvoiceController {
    createInvoice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productCodes, paymentCode, invoiceStatus, clientCode, name, address, phone, email, qtys, paymentType, bankAccount, accountName, accountNumber, clientPayment, addRecurringDate, date, } = req.body;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                if (!Array.isArray(productCodes) ||
                    !Array.isArray(qtys) ||
                    productCodes.length !== qtys.length) {
                    return res.status(400).send({
                        success: false,
                        message: 'Product IDs and quantities must be arrays of the same length',
                    });
                }
                const findProducts = yield prisma_1.default.product.findMany({
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
                const result = yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    let findPaymentType = yield prisma.paymentdetails.findUnique({
                        where: {
                            paymentCode,
                        },
                    });
                    if (!findPaymentType) {
                        const findPayment = yield prisma.paymentoptions.findFirst({
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
                            findPaymentType = yield prisma.paymentdetails.create({
                                data: {
                                    paymentCode: 'PDT-' + (0, uuid_1.v4)(),
                                    paymentOptId: findPayment.id,
                                    userId: findUser.id,
                                },
                            });
                        }
                        else {
                            findPaymentType = yield prisma.paymentdetails.create({
                                data: {
                                    paymentOptId: findPayment.id,
                                    paymentCode: 'PDT-' + (0, uuid_1.v4)(),
                                    bankAccount,
                                    accountName,
                                    accountNumber,
                                    userId: findUser.id,
                                },
                            });
                        }
                    }
                    let findClient = yield prisma.client.findUnique({
                        where: { clientCode },
                    });
                    const cliCode = 'CLI-' + (0, uuid_1.v4)();
                    let findClientPayment = yield prisma.clientpayment.findFirst({
                        where: {
                            id: findClient === null || findClient === void 0 ? void 0 : findClient.payId,
                        },
                    });
                    if (!findClientPayment) {
                        findClientPayment = yield prisma.clientpayment.findFirst({
                            where: {
                                paymentMethod: clientPayment,
                            },
                        });
                    }
                    if (!findClientPayment) {
                        return res.status(404).send({
                            success: false,
                            message: 'Cannot find payment method',
                        });
                    }
                    if (!findClient) {
                        findClient = yield prisma.client.create({
                            data: {
                                clientCode: cliCode,
                                name,
                                address,
                                phone,
                                email,
                                payId: findClientPayment === null || findClientPayment === void 0 ? void 0 : findClientPayment.id,
                                userId: findUser.id,
                            },
                        });
                    }
                    const invCode = 'INV-' + (0, uuid_1.v4)();
                    const newDate = new Date(date);
                    console.log(date);
                    console.log(addRecurringDate);
                    newDate.setDate(newDate.getDate() + Number(addRecurringDate));
                    console.log(newDate);
                    const newInvoice = yield prisma.invoice.create({
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
                        const newInvoiceDetail = yield prisma.invoicedetail.create({
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
                }));
                return res.status(200).send({
                    success: true,
                    message: 'Success to create your invoice',
                    result: result,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot create your invoice',
                    error,
                });
            }
        });
    }
    getInvoice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, startDate, endDate, page = 1, limit = 10, invoiceStatus, } = req.query;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                        searchResult = Object.assign(Object.assign({}, searchResult), { invoiceDate: {
                                gte: start,
                                lte: end,
                            } });
                    }
                    else {
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
                    searchResult = Object.assign(Object.assign({}, searchResult), { invoiceStatus: String(invoiceStatus) });
                }
                const findAllInvoiceUser = yield prisma_1.default.invoice.findMany({
                    where: Object.assign(Object.assign({}, searchResult), { userId: findUser.id, isDeleted: false }),
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
                const totalInvoices = yield prisma_1.default.invoice.count({
                    where: Object.assign(Object.assign({}, searchResult), { isDeleted: false, userId: findUser.id }),
                });
                return res.status(200).send({
                    success: true,
                    message: 'Find invoice success',
                    result: findAllInvoiceUser,
                    total: totalInvoices,
                    page: Number(page),
                    limit: Number(limit),
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get your invoice',
                    error,
                });
            }
        });
    }
    getInvoiceDetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invoiceCode } = req.params;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                const findInvoiceDetails = yield prisma_1.default.invoice.findMany({
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
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get invoice details',
                    error,
                });
            }
        });
    }
    updateInvoice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productCodes, clientPayment, clientCode, invoiceStatus, nextInvoiceDate, addRecurringDate, name, address, phone, email, qtys, date, } = req.body;
            const { invoiceCode } = req.params;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                const findInvoice = yield prisma_1.default.invoice.findUnique({
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
                if (!Array.isArray(productCodes) ||
                    !Array.isArray(qtys) ||
                    productCodes.length !== qtys.length) {
                    return res.status(400).send({
                        success: false,
                        message: 'Product IDs and quantities must be arrays of the same length',
                    });
                }
                const findProducts = yield prisma_1.default.product.findMany({
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
                const findInvoiceDetails = yield prisma_1.default.invoicedetail.findMany({
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
                let newNextInvoiceDate = findInvoice.invoiceDate;
                if (addRecurringDate) {
                    newNextInvoiceDate = new Date();
                    newNextInvoiceDate.setDate(newNextInvoiceDate.getDate() + Number(addRecurringDate));
                }
                const result = yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    let findClient = yield prisma.client.findUnique({
                        where: {
                            clientCode,
                        },
                    });
                    const cliCode = 'CLI-' + (0, uuid_1.v4)();
                    const findClientPayment = yield prisma.clientpayment.findFirst({
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
                        findClient = yield prisma.client.create({
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
                    }
                    else {
                        findClient = yield prisma.client.update({
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
                    const updatedInvoice = yield prisma.invoice.update({
                        data: {
                            invoiceDate: date ? date : findInvoice.invoiceDate,
                            invoiceStatus: invoiceStatus || findInvoice.invoiceStatus,
                            nextInvoiceDate: newNextInvoiceDate,
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
                            updateInvoiceDetail = yield prisma.invoicedetail.update({
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
                        }
                        else {
                            // Create new detail for product
                            updateInvoiceDetail = yield prisma.invoicedetail.create({
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
                }));
                return res.status(200).send({
                    success: true,
                    message: 'Update Invoice Success',
                    result: result,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot update your invoice',
                    error,
                });
            }
        });
    }
    deleteInvoice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invoiceCodes } = req.body;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                const findInvoices = yield prisma_1.default.invoice.findMany({
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
                yield prisma_1.default.invoice.updateMany({
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
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot delete invoice',
                    error,
                });
            }
        });
    }
    downloadInvoice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invoiceCodes } = req.body;
            console.log(invoiceCodes);
            try {
                if (!invoiceCodes || invoiceCodes.length === 0) {
                    return res.status(400).send({
                        success: false,
                        message: 'No invoice codes provided',
                    });
                }
                const findUser = yield prisma_1.default.user.findUnique({
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
                const selectedInvoices = yield prisma_1.default.invoice.findMany({
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
                const browser = yield puppeteer_1.default.launch({
                    headless: true,
                });
                const archive = (0, archiver_1.default)('zip', { zlib: { level: 9 } });
                res.set({
                    'Content-Type': 'application/zip',
                    'Content-Disposition': 'attachment; filename=selected_invoices.zip',
                });
                archive.pipe(res);
                for (const invoice of selectedInvoices) {
                    const page = yield browser.newPage();
                    const content = `
   <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        color: #333;
        background-color: #f4f4f4;
      }

      .container {
        width: 80%;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h1, h2 {
        color: #2c3e50;
        text-align: center;
      }

      p {
        font-size: 14px;
        margin: 5px 0;
      }

      .invoice-info {
        text-align: left;
        margin-bottom: 20px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }

      table, th, td {
        border: 1px solid #ddd;
      }

      th, td {
        padding: 10px;
        text-align: left;
      }

      th {
        background-color: #2c3e50;
        color: #fff;
      }

      td {
        background-color: #f9f9f9;
      }

      .total {
        font-weight: bold;
        text-align: right;
      }

      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hello, this is your invoice</h1>
      <h2>Invoice Code: ${invoice.invoiceCode}</h2>
      
      <div class="invoice-info">
        <p><strong>Client:</strong> ${invoice.client.name}</p>
        <p><strong>Date:</strong> ${new Date(invoice.invoiceDate).toLocaleDateString()}</p>
        <p><strong>Status:</strong> ${invoice.invoiceStatus}</p>
        <p><strong>Total Amount:</strong> 
          ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(invoice.totalAmount)}
        </p>
      </div>

      <h2>Invoice Details:</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price Unit</th>
            <th>Price Total</th>
          </tr>
        </thead>
        <tbody>
          ${invoice.invoicedetail
                        .map((detail) => `
                <tr>
                  <td>${detail.product.name}</td>
                  <td>${detail.qty}</td>
                  <td> ${new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    }).format(detail.priceUnit)}</td>
                  <td>${new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    }).format(detail.priceTotal)}</td>
                </tr>`)
                        .join('')}
        </tbody>
         <tfoot>
          <tr>
            <td colspan="3">Total</td>
            <td>
              ${new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    }).format(invoice.totalAmount)}
            </td>
          </tr>
        </tfoot>
      </table>

      <div class="footer">
        <p>Thank you for your business!</p>
      </div>
    </div>
  </body>
</html>
      `;
                    yield page.setContent(content, { waitUntil: 'networkidle0' }); // Wait until the network is idle (optional)
                    const pdfBuffer = yield page.pdf({
                        format: 'A4',
                        printBackground: true,
                    });
                    archive.append(Buffer.from(pdfBuffer), {
                        name: `invoice${invoice.invoiceCode}.pdf`,
                    });
                    yield page.close();
                }
                yield browser.close();
                archive.finalize();
                // res.set({
                //   'Content-Type': 'application/pdf',
                //   'Content-Disposition': 'attachment; filename=selected_invoices.pdf',
                //   'Content-Length': pdfBuffer.length,
                // });
                // return res.end(pdfBuffer);
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot download your invoice',
                    error,
                });
            }
        });
    }
    sendInvoice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invoiceCode, email } = req.body;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                const findInvoice = yield prisma_1.default.invoice.findUnique({
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
                const browser = yield puppeteer_1.default.launch();
                const page = yield browser.newPage();
                yield page.setContent(`<html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #333;
                background-color: #f4f4f4;
              }

              .container {
                width: 80%;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              h1, h2 {
                color: #2c3e50;
                text-align: center;
              }

              p {
                font-size: 14px;
                margin: 5px 0;
              }

              .invoice-info {
                text-align: left;
                margin-bottom: 20px;
              }

              table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
              }

              table, th, td {
                border: 1px solid #ddd;
              }

              th, td {
                padding: 10px;
                text-align: left;
              }

              th {
                background-color: #2c3e50;
                color: #fff;
              }

              td {
                background-color: #f9f9f9;
              }

              .total {
                font-weight: bold;
                text-align: right;
              }

              .footer {
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
                color: #999;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Hello, this is your invoice</h1>
              <h2>Invoice Code: ${findInvoice.invoiceCode}</h2>
              
              <div class="invoice-info">
                <p><strong>Client:</strong> ${findInvoice.client.name}</p>
                <p><strong>Date:</strong> ${new Date(findInvoice.invoiceDate).toLocaleDateString()}</p>
                <p><strong>Status:</strong> ${findInvoice.invoiceStatus}</p>
                <p><strong>Total Amount:</strong> 
                  ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(findInvoice.totalAmount)}
                </p>
              </div>

              <h2>Invoice Details:</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${findInvoice.invoicedetail
                    .map((detail) => `
                        <tr>
                          <td>${detail.product.name}</td>
                          <td>${detail.qty}</td>
                          <td>${new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(detail.priceTotal)}</td>
                        </tr>`)
                    .join('')}
                </tbody>
              </table>

              <div class="footer">
                <p>Thank you for your business!</p>
              </div>
            </div>
          </body>
        </html>
        `);
                const pdfBuffer = yield page.pdf({ format: 'A4' });
                yield browser.close();
                yield (0, invoiceEmail_1.sendInvoiceEmail)(email, 'Your Invoice PDF', null, {
                    email,
                    pdfBuffer,
                });
                res.status(200).send({
                    success: true,
                    message: 'invoice sent success',
                });
            }
            catch (error) {
                next({
                    success: false,
                    message: 'Cannot send invoice',
                    error,
                });
            }
        });
    }
}
exports.InvoiceController = InvoiceController;
