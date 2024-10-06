import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const createProductValidation = [
  body('name').notEmpty().withMessage('Please provide product name'),
  body('description')
    .notEmpty()
    .withMessage('Please provide product description'),
  body('price').notEmpty().withMessage('Please provide product price'),
  body('categoryName')
    .notEmpty()
    .withMessage('Please provide product category'),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({
        success: false,
        error: errorValidator,
      });
    }
    next();
  },
];
