"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createProductValidation = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Please provide product name'),
    (0, express_validator_1.body)('description')
        .notEmpty()
        .withMessage('Please provide product description'),
    (0, express_validator_1.body)('price').notEmpty().withMessage('Please provide product price'),
    (0, express_validator_1.body)('categoryName')
        .notEmpty()
        .withMessage('Please provide product category'),
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
