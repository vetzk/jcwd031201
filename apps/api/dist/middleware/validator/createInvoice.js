"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoiceValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createInvoiceValidation = [
    (0, express_validator_1.body)('clientCode').notEmpty().withMessage('please provide the client'),
    (0, express_validator_1.body)('name')
        .if((value, { req }) => !req.body.clientCode)
        .notEmpty()
        .withMessage('Please provide client name'),
    (0, express_validator_1.body)('address')
        .if((value, { req }) => !req.body.clientCode)
        .notEmpty()
        .withMessage('Please provide client address'),
    (0, express_validator_1.body)('phone')
        .if((value, { req }) => !req.body.clientCode)
        .notEmpty()
        .withMessage('Please provide client phone'),
    (0, express_validator_1.body)('email')
        .if((value, { req }) => !req.body.clientCode)
        .isEmail()
        .withMessage('Please provide a valid email')
        .notEmpty()
        .withMessage('Please provide client email'),
    (0, express_validator_1.body)('invoiceStatus').notEmpty().withMessage('Please provide status invoice'),
    (0, express_validator_1.body)('addRecurringDate')
        .notEmpty()
        .withMessage('Please provide recurring date'),
    (0, express_validator_1.body)('date').notEmpty().withMessage('Please provide due date'),
    (0, express_validator_1.body)('clientPayment')
        .if((value, { req }) => !req.body.clientCode)
        .notEmpty()
        .withMessage('Please provide client payment options'),
    (0, express_validator_1.body)('qtys')
        .isArray({
        min: 1,
    })
        .withMessage('Please provide the quantities')
        .custom((qtys) => {
        if (!qtys.every((qty) => qty > 0)) {
            throw new Error('Quantities must be greater than 0');
        }
        return true;
    }),
    (0, express_validator_1.body)('productCodes')
        .isArray({
        min: 1,
    })
        .withMessage('Please provide the products')
        .custom((productCodes) => {
        if (!productCodes.every((code) => typeof code === 'string')) {
            throw new Error('Codes must be valid string');
        }
        return true;
    }),
    (req, res, next) => {
        const errorValidator = (0, express_validator_1.validationResult)(req);
        if (!errorValidator.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidator,
            });
        }
        next();
    },
];
