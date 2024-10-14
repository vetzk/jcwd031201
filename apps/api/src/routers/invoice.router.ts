import { InvoiceController } from '@/controllers/invoice.controller';
import { createInvoiceValidation } from '@/middleware/validator/createInvoice';
import { verifyToken } from '@/middleware/verifyToken';
import { Router } from 'express';

export class InvoiceRouter {
  private router: Router;
  private invoiceController: InvoiceController;

  constructor() {
    this.router = Router();
    this.invoiceController = new InvoiceController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.patch(
      '/delete',
      verifyToken,
      this.invoiceController.deleteInvoice,
    );

    this.router.post(
      '/sendinvoice',
      verifyToken,
      this.invoiceController.sendInvoice,
    );

    this.router.post(
      '',
      createInvoiceValidation,
      verifyToken,
      this.invoiceController.createInvoice,
    );
    this.router.get('', verifyToken, this.invoiceController.getInvoice);
    this.router.get(
      '/:invoiceCode',
      verifyToken,
      this.invoiceController.getInvoiceDetails,
    );
    this.router.patch(
      '/:invoiceCode',
      verifyToken,
      this.invoiceController.updateInvoice,
    );

    this.router.post(
      '/download',
      verifyToken,
      this.invoiceController.downloadInvoice,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
