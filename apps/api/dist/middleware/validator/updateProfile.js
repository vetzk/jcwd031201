"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileValidation = void 0;
const express_validator_1 = require("express-validator");
exports.updateProfileValidation = [
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('First name cannot be empty'),
    (0, express_validator_1.body)('lastName').notEmpty().withMessage('Last name cannot be empty'),
    (0, express_validator_1.body)('address').notEmpty().withMessage('Address cannot be empty'),
    (0, express_validator_1.body)('phone').notEmpty().withMessage('Phone cannot be empty'),
    (0, express_validator_1.body)('companyName').notEmpty().withMessage('Company name cannot be empty'),
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
