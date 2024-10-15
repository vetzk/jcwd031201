"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRouter = void 0;
const invoice_controller_1 = require("../controllers/invoice.controller");
const createInvoice_1 = require("../middleware/validator/createInvoice");
const updateInvoice_1 = require("../middleware/validator/updateInvoice");
const verifyToken_1 = require("../middleware/verifyToken");
const express_1 = require("express");
class InvoiceRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.invoiceController = new invoice_controller_1.InvoiceController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.patch('/delete', verifyToken_1.verifyToken, this.invoiceController.deleteInvoice);
        this.router.post('/sendinvoice', verifyToken_1.verifyToken, this.invoiceController.sendInvoice);
        this.router.post('', createInvoice_1.createInvoiceValidation, verifyToken_1.verifyToken, this.invoiceController.createInvoice);
        this.router.get('', verifyToken_1.verifyToken, this.invoiceController.getInvoice);
        this.router.get('/:invoiceCode', verifyToken_1.verifyToken, this.invoiceController.getInvoiceDetails);
        this.router.patch('/:invoiceCode', updateInvoice_1.updateInvoiceValidation, verifyToken_1.verifyToken, this.invoiceController.updateInvoice);
        this.router.post('/download', verifyToken_1.verifyToken, this.invoiceController.downloadInvoice);
    }
    getRouter() {
        return this.router;
    }
}
exports.InvoiceRouter = InvoiceRouter;
