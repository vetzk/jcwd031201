import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class ClientController {
  async getClient(req: Request, res: Response, next: NextFunction) {
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

      const client = await prisma.client.findMany({
        where: {
          userId: findUser.id,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Success to get client',
        result: client,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get client',
      });
    }
  }
}
