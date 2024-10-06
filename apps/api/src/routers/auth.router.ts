import { loginValidation } from '@/middleware/validator/login';
import { AuthController } from '../controllers/auth.controller';
import { registerValidation } from '../middleware/validator/register';
import { Router } from 'express';
import { verifyToken } from '@/middleware/verifyToken';
import { forgotPassValidation } from '@/middleware/validator/forgotPassword';
import { resetPassValidation } from '@/middleware/validator/resetPassword';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      registerValidation,
      this.authController.register,
    );

    this.router.post('/login', loginValidation, this.authController.login);
    this.router.patch('/verify', verifyToken, this.authController.verifyEmail);

    this.router.get('/keeplogin', verifyToken, this.authController.keepLogin);
    this.router.post(
      '/forgotpass',
      forgotPassValidation,
      this.authController.forgotPassword,
    );
    this.router.patch(
      '/resetpass',
      resetPassValidation,
      verifyToken,
      this.authController.resetPassword,
    );
    this.router.post('/logout', this.authController.logout);
  }
  getRouter(): Router {
    return this.router;
  }
}
