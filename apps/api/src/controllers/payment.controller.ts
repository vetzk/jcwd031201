import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class PaymentController {
  async getPaymentType(req: Request, res: Response, next: NextFunction) {
    try {
      const findPaymentTypes = await prisma.paymentoptions.findMany({});

      if (!findPaymentTypes) {
        return res.status(404).send({
          success: false,
          message: 'Cannot get your payment types',
        });
      }
      return res.status(200).send({
        success: true,
        message: 'Success to get payment types',
        result: findPaymentTypes,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get payment type',
        error,
      });
    }
  }

  async getPaymentDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const findPaymentDetails = await prisma.paymentdetails.findMany({
        where: {
          userId: findUser.id,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Success to get payment details',
        result: findPaymentDetails,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot find payment details',
        error,
      });
    }
  }

  async getPaymentMethod(req: Request, res: Response, next: NextFunction) {
    try {
      const findPaymentMethod = await prisma.clientpayment.findMany({});

      if (!findPaymentMethod) {
        return res.status(404).send({
          success: false,
          message: 'Cannot get payment method',
        });
      }

      return res.status(200).send({
        success: true,
        message: 'Get payment method success',
        result: findPaymentMethod,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get payment method',
        error,
      });
    }
  }
}
