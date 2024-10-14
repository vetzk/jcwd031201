import prisma from '@/prisma';
import { hashPassword } from '../utils/hash';
import { createToken } from '../utils/jwt';
import { sendEmailVerify } from '../utils/verifyEmail';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { compareSync } from 'bcrypt';
import { sendResetEmail } from '@/utils/emailResetPass';
import { addMinutes } from 'date-fns';
import {
  findEmailExist,
  findUserAuth,
  findUserId,
  findUsernameExist,
  findUserViaEmail,
} from '@/services/auth.service';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    const { email, username, password, confirmPassword } = req.body;
    try {
      const findEmail = await findEmailExist(email);

      const findUsername = await findUsernameExist(username);

      console.log(findEmail);
      console.log(findUsername);

      if (findEmail) {
        return res.status(401).send({
          success: false,
          message: 'Email already exist',
        });
      }

      if (findUsername) {
        return res.status(401).send({
          success: false,
          message: 'Username already exist',
        });
      }

      const identId = 'ID-' + uuid();

      const user = await prisma.user.create({
        data: {
          email,
          username,
          password: await hashPassword(password),
          identificationId: identId,
        },
      });

      const token = createToken(
        {
          identificationId: user.identificationId,
          email: user.email,
          username: user.username,
        },
        '24h',
      );

      await sendEmailVerify(user.email, 'Verify Email', null, {
        email: user.email,
        token,
      });

      return res.status(200).send({
        success: true,
        message: 'Create account success',
        result: {
          token,
          identificationId: user.identificationId,
          email: user.email,
          username: user.username,
          isVerified: user.isVerified,
        },
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot register your account',
        error,
      });
    }
  }

  async verifyEmail(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.user.update({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
        data: {
          isVerified: true,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Your email has been verified',
      });
    } catch (error) {
      console.log(error);
      next({ success: false, message: 'Cannot verify email', error });
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const BLOCK_TIME = 5 * 60 * 1000;
    try {
      const findUser: any = await findUserAuth(username);

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find your username',
        });
      }

      if (findUser.sessionToken) {
        return res.status(403).send({
          success: false,
          message:
            'You are already logged in from another device. Please log out first.',
        });
      }

      const currentTime = new Date().getTime();
      const lastLoginAttemptTime = new Date(
        findUser.lastLoginAttempt,
      ).getTime();

      if (
        findUser.isBlocked &&
        currentTime - lastLoginAttemptTime >= BLOCK_TIME
      ) {
        const updatedTime = await prisma.user.update({
          where: {
            username,
          },
          data: {
            loginAttempt: 0,
            isBlocked: false,
          },
        });

        findUser.isBlocked = false;
        findUser.loginAttempt = 0;
      }

      if (findUser.isBlocked) {
        if (currentTime - lastLoginAttemptTime < BLOCK_TIME) {
          const timeLeftUntilLogin =
            BLOCK_TIME - (currentTime - lastLoginAttemptTime);
          const timeInMinutes = Math.ceil(timeLeftUntilLogin / (60 * 1000));
          return res.status(403).send({
            success: false,
            message: `Too many login attempts. Try again in ${timeInMinutes} minutes`,
          });
        }
      }

      const comparePassword = compareSync(password, findUser.password);

      if (!comparePassword) {
        const userLoginAttempt = await prisma.user.update({
          where: {
            username,
          },
          data: {
            loginAttempt: findUser.loginAttempt + 1,
            lastLoginAttempt: new Date(),
          },
        });

        if (findUser.loginAttempt >= 5) {
          await prisma.user.update({
            where: {
              username,
            },
            data: {
              isBlocked: true,
              lastLoginAttempt: new Date(),
            },
          });

          return res.status(403).send({
            success: false,
            message: `Too many login attempts. You can try again after 5 minutes`,
          });
        }

        return res.status(401).send({
          success: false,
          message: 'Wrong password',
          result: userLoginAttempt,
        });
      }

      const token = createToken(
        {
          identificationId: findUser.identificationId,
          email: findUser.email,
          username: findUser.username,
        },
        '24h',
      );

      await prisma.user.update({
        where: {
          username,
        },
        data: {
          sessionToken: token,
          loginAttempt: 0,
          lastLoginAttempt: new Date(),
          isBlocked: false,
        },
      });

      const findProfile = await prisma.userprofile.findFirst({
        where: {
          userId: findUser.id,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Login success',
        result: {
          identificationId: findUser.identificationId,
          email: findUser.email,
          profilePicture: findProfile?.profilePicture,
          username: findUser.username,
          isVerified: findUser.isVerified,
          token,
        },
      });
    } catch (error) {
      console.log(error);
      next({ success: false, message: 'Failed to login', error });
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const findUser: any = await findUserId(
        res.locals.decrypt.identificationId,
      );

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const token = createToken(
        {
          identificationId: findUser.identificationId,
          email: findUser.email,
        },
        '24h',
      );

      return res.status(200).send({
        success: true,
        result: {
          identificationId: findUser.identificationId,
          username: findUser.username,
          email: findUser.email,
          isVerified: findUser.isVerified,
          token,
        },
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Keep Login function failed',
        error,
      });
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    try {
      const findEmail: any = await findUserViaEmail(email);

      if (!findEmail) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find your email',
        });
      }

      const token = createToken(
        {
          email: findEmail.email,
          identificationId: findEmail.identificationId,
          username: findEmail.username,
        },
        '20m',
      );

      const expiryTime = addMinutes(new Date(), 20);

      await prisma.user.update({
        where: {
          email,
        },
        data: {
          resetToken: token,
          resetTokenExpiry: expiryTime,
        },
      });

      await sendResetEmail(findEmail.email, 'Password Reset', null, {
        email: findEmail.email,
        token,
      });

      return res.status(200).send({
        success: true,
        message: 'Account exist. Please reset your password',
        result: token,
      });
    } catch (error) {
      console.log(error);
      next({ success: false, message: 'Forgot password function failed' });
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    const { token } = req.params;
    const { password } = req.body;
    try {
      if (!res.locals.decrypt.identificationId) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const user = await prisma.user.findFirst({
        where: {
          resetToken: token,
          resetTokenExpiry: {
            gte: new Date(),
          },
        },
      });

      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'Invalid or expired token',
        });
      }

      await prisma.user.update({
        data: {
          password: await hashPassword(password),
          resetToken: null,
          resetTokenExpiry: null,
        },
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
      });
      return res.status(200).send({
        success: true,
        message: 'Reset password success',
      });
    } catch (error) {
      console.log(error);
      next({ success: false, message: 'Cannot reset your password', error });
    }
  }

  async validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.body;
    try {
      const findToken = await prisma.user.findFirst({
        where: {
          resetToken: token,
          identificationId: res.locals.decrypt.identificationId,
        },
      });

      if (!findToken) {
        return res.status(401).send({
          success: false,
          message: 'Token has expired',
        });
      }

      return res.status(200).send({
        success: true,
        message: 'Success to get your token',
        result: findToken.resetToken,
      });
    } catch (error) {
      next({
        success: false,
        message: 'Cannot validate your token',
        error,
      });
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.user.update({
        where: {
          identificationId: res.locals.decrypt.identificationId,
        },
        data: {
          sessionToken: null,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Logout success',
      });
    } catch (error) {
      console.log(error);
      next({ success: false, message: 'Failed to logout', error });
    }
  }
}
