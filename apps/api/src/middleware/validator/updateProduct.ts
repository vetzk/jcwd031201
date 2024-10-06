import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const updateProductValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('description').notEmpty().withMessage('Description cannot be empty'),
  body('price').notEmpty().withMessage('Price cannot be empty'),
  body('categoryName').notEmpty().withMessage('Category cannot be empty'),
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
