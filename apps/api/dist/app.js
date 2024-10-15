"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const path_1 = __importDefault(require("path"));
const auth_router_1 = require("./routers/auth.router");
const profile_router_1 = require("./routers/profile.router");
const product_router_1 = require("./routers/product.router");
const invoice_router_1 = require("./routers/invoice.router");
const client_router_1 = require("./routers/client.router");
const payment_router_1 = require("./routers/payment.router");
const node_cron_1 = __importDefault(require("node-cron"));
const recurringInvoiceService_1 = require("./services/recurringInvoiceService");
const cloudinary_1 = __importDefault(require("./utils/cloudinary"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configure();
        this.routes();
        this.handleError();
    }
    configure() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, express_1.json)());
        this.app.use((0, express_1.urlencoded)({ extended: true }));
        this.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../public')));
        cloudinary_1.default.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Replace with your Cloudinary cloud name
            api_key: process.env.CLOUDINARY_API_KEY, // Replace with your Cloudinary API key
            api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your Cloudinary API secret
        });
    }
    handleError() {
        // not found
        this.app.use((req, res, next) => {
            if (req.path.includes('/api/')) {
                res.status(404).send('Not found !');
            }
            else {
                next();
            }
        });
        // error
        this.app.use((err, req, res, next) => {
            if (req.path.includes('/api/')) {
                console.error('Error : ', err.stack);
                res.status(500).send('Error !');
            }
            else {
                next();
            }
        });
    }
    routes() {
        const authRouter = new auth_router_1.AuthRouter();
        const profileRouter = new profile_router_1.ProfileRouter();
        const productRouter = new product_router_1.ProductRouter();
        const invoiceRouter = new invoice_router_1.InvoiceRouter();
        const clientRouter = new client_router_1.ClientRouter();
        const paymentRouter = new payment_router_1.PaymentRouter();
        this.app.get('/', (req, res) => {
            res.send(`Hello, Purwadhika Student API!`);
        });
        this.app.use('/api/auth', authRouter.getRouter());
        this.app.use('/api/profile', profileRouter.getRouter());
        this.app.use('/api/product', productRouter.getRouter());
        this.app.use('/api/invoice', invoiceRouter.getRouter());
        this.app.use('/api/client', clientRouter.getRouter());
        this.app.use('/api/payment', paymentRouter.getRouter());
    }
    start() {
        this.app.listen(config_1.PORT, () => {
            console.log(`  ➜  [API] Local:   http://localhost:${config_1.PORT}/`);
            // startCronJobs();
            node_cron_1.default.schedule('0 0 * * *', () => __awaiter(this, void 0, void 0, function* () {
                console.log('Running recurring');
                yield (0, recurringInvoiceService_1.sendRecurringInvoices)();
            }));
        });
    }
}
exports.default = App;
