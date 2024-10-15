"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassValidation = void 0;
const express_validator_1 = require("express-validator");
exports.resetPassValidation = [
    (0, express_validator_1.body)('password')
        .notEmpty()
        .withMessage('Please provide your password')
        .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage('Password must contain minimum 8 characters, at least one uppercase, one lowercase, one number, one symbol'),
    (0, express_validator_1.body)('confirmPassword')
        .notEmpty()
        .withMessage('Please confirm your password')
        .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password does not match');
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
