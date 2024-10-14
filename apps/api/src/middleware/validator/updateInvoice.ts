import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const updateInvoiceValidation = [
  body('name')
    .if((value, { req }) => !req.body.clientCode)
    .notEmpty()
    .withMessage('Please provide client name'),
  body('address')
    .if((value, { req }) => !req.body.clientCode)
    .notEmpty()
    .withMessage('Please provide client address'),
  body('phone')
    .if((value, { req }) => !req.body.clientCode)
    .notEmpty()
    .withMessage('Please provide client phone'),
  body('email')
    .if((value, { req }) => !req.body.clientCode)
    .isEmail()
    .withMessage('Please provide a valid email')
    .notEmpty()
    .withMessage('Please provide client email'),
  body('invoiceStatus').notEmpty().withMessage('Please provide status invoice'),
  body('date').notEmpty().withMessage('Please provide due date'),
  body('addRecurringDate')
    .notEmpty()
    .withMessage('Please provide recurring date'),
  body('qtys')
    .isArray({
      min: 1,
    })
    .withMessage('Please provide the quantities')
    .custom((qtys) => {
      if (!qtys.every((qty: number) => qty > 0)) {
        throw new Error('Quantities must be greater than 0');
      }
      return true;
    }),
  body('productCodes')
    .isArray({
      min: 1,
    })
    .withMessage('Please provide the products')
    .custom((productCodes) => {
      if (!productCodes.every((code: string) => typeof code === 'string')) {
        throw new Error('Codes must be valid string');
      }
      return true;
    }),
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
