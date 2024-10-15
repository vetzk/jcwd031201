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
exports.PaymentController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class PaymentController {
    getPaymentType(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findPaymentTypes = yield prisma_1.default.paymentoptions.findMany({});
                if (!findPaymentTypes) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot get your payment types',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Success to get payment types',
                    result: findPaymentTypes,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get payment type',
                    error,
                });
            }
        });
    }
    getPaymentDetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const findPaymentDetails = yield prisma_1.default.paymentdetails.findMany({
                    where: {
                        userId: findUser.id,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Success to get payment details',
                    result: findPaymentDetails,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot find payment details',
                    error,
                });
            }
        });
    }
    getPaymentMethod(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findPaymentMethod = yield prisma_1.default.clientpayment.findMany({});
                if (!findPaymentMethod) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot get payment method',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Get payment method success',
                    result: findPaymentMethod,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get payment method',
                    error,
                });
            }
        });
    }
}
exports.PaymentController = PaymentController;
