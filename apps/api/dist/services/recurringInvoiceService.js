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
exports.sendRecurringInvoices = void 0;
const prisma_1 = __importDefault(require("../prisma")); // Update with your actual prisma import path
const generatePdfInvoice_1 = require("../utils/generatePdfInvoice"); //
const invoiceEmail_1 = require("../utils/invoiceEmail"); //
function sendRecurringInvoices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
            console.log(`Start of day: ${startOfDay}`);
            console.log(`End of day: ${endOfDay}`);
            const invoicesToSend = yield prisma_1.default.invoice.findMany({
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
                const pdfBuffer = yield (0, generatePdfInvoice_1.generatePdfInvoice)(invoice);
                yield (0, invoiceEmail_1.sendInvoiceEmail)(invoice.client.email, 'Recurring Invoice', null, {
                    email: invoice.client.email,
                    pdfBuffer,
                });
                const newNextInvoiceDate = new Date(invoice.nextInvoiceDate);
                newNextInvoiceDate.setDate(newNextInvoiceDate.getDate() + invoice.recurringDays);
                const invoiceUpdate = yield prisma_1.default.invoice.update({
                    where: { id: invoice.id },
                    data: {
                        nextInvoiceDate: newNextInvoiceDate,
                    },
                });
                console.log(invoiceUpdate);
            }
        }
        catch (error) {
            console.error('Error sending recurring invoices:', error);
        }
    });
}
exports.sendRecurringInvoices = sendRecurringInvoices;
