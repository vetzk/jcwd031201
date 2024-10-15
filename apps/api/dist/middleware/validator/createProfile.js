"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfileValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createProfileValidation = [
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('Please provide your first name'),
    (0, express_validator_1.body)('lastName').notEmpty().withMessage('Please provide your last name'),
    (0, express_validator_1.body)('companyName')
        .notEmpty()
        .withMessage('Please provide your company name'),
    (0, express_validator_1.body)('address').notEmpty().withMessage('Please provide your address'),
    (0, express_validator_1.body)('phone').notEmpty().withMessage('Please provide your phone'),
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
