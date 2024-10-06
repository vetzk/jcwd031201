import { ClientController } from '@/controllers/client.controller';
import { verifyToken } from '@/middleware/verifyToken';
import { Router } from 'express';

export class ClientRouter {
  private router: Router;
  private clientController: ClientController;

  constructor() {
    this.router = Router();
    this.clientController = new ClientController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('', verifyToken, this.clientController.getClient);
  }

  getRouter(): Router {
    return this.router;
  }
}
