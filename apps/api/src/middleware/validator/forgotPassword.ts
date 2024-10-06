import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const forgotPassValidation = [
  body('email')
    .notEmpty()
    .withMessage('Please provide your email')
    .isEmail()
    .withMessage('Format email is wrong'),
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
