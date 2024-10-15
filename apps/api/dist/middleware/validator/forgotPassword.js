"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassValidation = void 0;
const express_validator_1 = require("express-validator");
exports.forgotPassValidation = [
    (0, express_validator_1.body)('email')
        .notEmpty()
        .withMessage('Please provide your email')
        .isEmail()
        .withMessage('Format email is wrong'),
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
