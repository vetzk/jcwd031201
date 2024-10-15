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
exports.generatePdfInvoice = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
function generatePdfInvoice(invoice) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            // Set the content of the page with the invoice details
            yield page.setContent(`<html>
        <body>
        <h1> Hello, this is your invoice</h1>
          <h1>Invoice Code: ${invoice.invoiceCode}</h1>
          <p>Client: ${invoice.client.name}</p>
          <p>Date: ${new Date(invoice.invoiceDate).toLocaleDateString()}</p>
          <p>Status: ${invoice.invoiceStatus}</p>
          <p>Total Amount: ${new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(invoice.totalAmount)}</p>
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
            ${invoice.invoicedetail
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

        </body>
      </html>`);
            const pdfBuffer = yield page.pdf({ format: 'A4' });
            yield browser.close();
            return pdfBuffer;
        }
        catch (error) {
            console.log(error);
            throw new Error('Could not generate PDF invoice');
        }
    });
}
exports.generatePdfInvoice = generatePdfInvoice;
