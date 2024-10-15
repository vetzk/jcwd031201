"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRouter = void 0;
const payment_controller_1 = require("../controllers/payment.controller");
const verifyToken_1 = require("../middleware/verifyToken");
const express_1 = require("express");
class PaymentRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.paymentController = new payment_controller_1.PaymentController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/type', this.paymentController.getPaymentType);
        this.router.get('/details', verifyToken_1.verifyToken, this.paymentController.getPaymentDetails);
        this.router.get('/method', this.paymentController.getPaymentMethod);
    }
    getRouter() {
        return this.router;
    }
}
exports.PaymentRouter = PaymentRouter;
