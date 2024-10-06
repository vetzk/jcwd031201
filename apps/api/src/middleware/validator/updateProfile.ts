import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const updateProfileValidation = [
  body('firstName').notEmpty().withMessage('First name cannot be empty'),
  body('lastName').notEmpty().withMessage('Last name cannot be empty'),
  body('address').notEmpty().withMessage('Address cannot be empty'),
  body('phone').notEmpty().withMessage('Phone cannot be empty'),
  body('companyName').notEmpty().withMessage('Company name cannot be empty'),
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
