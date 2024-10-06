import prisma from '@/prisma';
import { hashPassword } from '../utils/hash';
import { createToken } from '../utils/jwt';
import { sendEmailVerify } from '../utils/verifyEmail';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { compareSync } from 'bcrypt';
import { sendResetEmail } from '@/utils/emailResetPass';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    const { email, username, password, confirmPassword } = req.body;
    try {
      const findEmailExist = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      const findUsernameExist = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (findEmailExist) {
        return res.status(401).send({
          success: false,
          message: 'Email already exist',
        });
      }

      if (findUsernameExist) {
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
      const findUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find your username',
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

      await prisma.user.update({
        where: {
          username,
        },
        data: {
          loginAttempt: 0,
          lastLoginAttempt: new Date(),
          isBlocked: false,
        },
      });

      const token = createToken(
        {
          identificationId: findUser.identificationId,
          email: findUser.email,
          username: findUser.username,
        },
        '24h',
      );

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
      const findEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      });

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
    const { password } = req.body;
    try {
      if (!res.locals.decrypt.identificationId) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }
      await prisma.user.update({
        data: {
          password: await hashPassword(password),
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

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
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
