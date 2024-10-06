import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const createProfileValidation = [
  body('firstName').notEmpty().withMessage('Please provide your first name'),
  body('lastName').notEmpty().withMessage('Please provide your last name'),
  body('companyName')
    .notEmpty()
    .withMessage('Please provide your company name'),
  body('address').notEmpty().withMessage('Please provide your address'),
  body('phone').notEmpty().withMessage('Please provide your phone'),
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
