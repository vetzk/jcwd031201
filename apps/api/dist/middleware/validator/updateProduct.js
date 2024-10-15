"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidation = void 0;
const express_validator_1 = require("express-validator");
exports.updateProductValidation = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Name cannot be empty'),
    (0, express_validator_1.body)('description').notEmpty().withMessage('Description cannot be empty'),
    (0, express_validator_1.body)('price').notEmpty().withMessage('Price cannot be empty'),
    (0, express_validator_1.body)('categoryName').notEmpty().withMessage('Category cannot be empty'),
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
