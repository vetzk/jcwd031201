import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const createInvoiceValidation = [
  body('name').notEmpty().withMessage('Please provide client name'),
  body('address').notEmpty().withMessage('Please provide client address'),
  body('phone').notEmpty().withMessage('Please provide client phone'),
  body('email').notEmpty().withMessage('Please provide client email'),
  body('qtys').notEmpty().withMessage('Please provide quantity'),
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
