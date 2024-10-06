import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const registerValidation = [
  body('email')
    .notEmpty()
    .withMessage('Please provide your email')
    .isEmail()
    .withMessage('Email format is wrong'),
  body('username').notEmpty().withMessage('Please provide your username'),
  body('password')
    .notEmpty()
    .withMessage('Please provide your password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    })
    .withMessage(
      'Password must contain minimum 8 characters, at least one uppercase, one lowercase, one number, one symbol',
    ),
  body('confirmPassword')
    .notEmpty()
    .withMessage('Please confirm your password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password doesn't match");
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
