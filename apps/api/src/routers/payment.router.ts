import { PaymentController } from '@/controllers/payment.controller';
import { verifyToken } from '@/middleware/verifyToken';
import { Router } from 'express';

export class PaymentRouter {
  private router: Router;
  private paymentController: PaymentController;

  constructor() {
    this.router = Router();
    this.paymentController = new PaymentController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/type', this.paymentController.getPaymentType);
    this.router.get(
      '/details',
      verifyToken,
      this.paymentController.getPaymentDetails,
    );
    this.router.get('/method', this.paymentController.getPaymentMethod);
  }

  getRouter(): Router {
    return this.router;
  }
}
