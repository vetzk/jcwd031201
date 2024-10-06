import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

export class ProfileController {
  async createProfile(req: Request, res: Response, next: NextFunction) {
    const {
      firstName,
      lastName,
      companyName,
      address,
      phone,
      paymentType,
      bankAccount,
      accountName,
      accountNumber,
    } = req.body;

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

      // const findPaymentType = await prisma.paymentoptions.findFirst({
      //   where: {
      //     paymentType,
      //   },
      // });

      // if (!findPaymentType) {
      //   return res.status(404).send({
      //     success: false,
      //     message: 'Cannot find payment options',
      //   });
      // }

      const createProfile = await prisma.userprofile.create({
        data: {
          userId: findUser.id,
          firstName,
          lastName,
          companyName,
          address,
          phone,
          profilePicture: `/assets/profile/${req.file?.filename}`,
          isCreated: true,
        },
      });

      // if (findPaymentType.paymentType === 'BANK_TRANSFER') {
      //   await prisma.paymentdetails.create({
      //     data: {
      //       userId: findUser.id,
      //       bankAccount,
      //       accountName,
      //       accountNumber,
      //       paymentOptId: findPaymentType.id,
      //     },
      //   });
      // }

      return res.status(200).send({
        success: true,
        message: 'Create profile success',
        result: createProfile,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot create your profile',
        error,
      });
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
        });
      }

      const findProfile = await prisma.userprofile.findFirst({
        where: {
          userId: findUser.id,
        },
      });

      // const findPaymentDetails = await prisma.paymentdetails.findFirst({
      //   where: {
      //     userId: findUser.id,
      //   },
      // });

      return res.status(200).send({
        success: true,
        message: 'Get profile success',
        result: {
          findProfile,
          // findPaymentDetails,
        },
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get your profile',
        error,
      });
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    const {
      firstName,
      lastName,
      companyName,
      address,
      phone,
      paymentType,
      bankAccount,
      accountName,
      accountNumber,
    } = req.body;
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

      const findProfile = await prisma.userprofile.findFirst({
        where: { userId: findUser.id },
      });

      if (findProfile?.profilePicture) {
        const oldImagePath = path.join(
          __dirname,
          '../../public',
          findProfile.profilePicture,
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // const findPaymentType = await prisma.paymentoptions.findFirst({
      //   where: { paymentType },
      // });

      // if (!findPaymentType) {
      //   return res.status(404).send({
      //     success: false,
      //     message: 'Cannot find payment type',
      //   });
      // }

      // const findPaymentDetails = await prisma.paymentdetails.findFirst({
      //   where: {
      //     userId: findUser.id,
      //   },
      // });

      const updatedProfile = await prisma.userprofile.update({
        where: {
          id: findProfile?.id,
        },
        data: {
          address: address ? address : findProfile?.address,
          firstName: firstName ? firstName : findProfile?.firstName,
          lastName: lastName ? lastName : findProfile?.lastName,
          phone: phone ? phone : findProfile?.lastName,
          companyName: companyName ? companyName : findProfile?.companyName,
          // paymentOptId: paymentType
          //   ? findPaymentType?.id
          //   : findProfile?.paymentOptId,
          profilePicture: req.file
            ? `/assets/profile/${req.file.filename}`
            : findProfile?.profilePicture,
        },
      });

      // if (paymentType === 'BANK_TRANSFER' && findPaymentDetails) {
      //   await prisma.paymentdetails.update({
      //     data: {
      //       accountName: accountName
      //         ? accountName
      //         : findPaymentDetails?.accountName,
      //       accountNumber: accountNumber
      //         ? accountNumber
      //         : findPaymentDetails?.accountNumber,
      //       bankAccount: bankAccount
      //         ? bankAccount
      //         : findPaymentDetails?.bankAccount,
      //     },
      //     where: {
      //       id: findPaymentDetails?.id,
      //     },
      //   });
      // } else {
      //   await prisma.paymentdetails.create({
      //     data: {
      //       userId: findUser.id,
      //       paymentOptId: findPaymentType?.id,
      //       accountName: accountName
      //         ? accountName
      //         : findPaymentDetails?.accountName,
      //       accountNumber: accountNumber
      //         ? accountNumber
      //         : findPaymentDetails?.accountNumber,
      //       bankAccount: bankAccount
      //         ? bankAccount
      //         : findPaymentDetails?.bankAccount,
      //     },
      //   });
      // }

      return res.status(200).send({
        success: true,
        message: 'Update profile success',
        result: updatedProfile,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot update your profile',
        error,
      });
    }
  }
}
