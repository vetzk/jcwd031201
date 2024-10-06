import { ProductController } from '@/controllers/product.controller';
import { createProductValidation } from '@/middleware/validator/createProduct';
import { updateProductValidation } from '@/middleware/validator/updateProduct';
import { verifyToken } from '@/middleware/verifyToken';
import { Router } from 'express';

export class ProductRouter {
  private router: Router;
  private productController: ProductController;

  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/category', this.productController.getCategory);
    this.router.patch(
      '/delete',
      verifyToken,
      this.productController.deleteProducts,
    );
    this.router.post(
      '',
      createProductValidation,
      verifyToken,
      this.productController.createProduct,
    );
    this.router.get('', verifyToken, this.productController.getProduct);
    this.router.get(
      '/:productCode',
      verifyToken,
      this.productController.getProductDetails,
    );
    this.router.patch(
      '/:productCode',
      updateProductValidation,
      verifyToken,
      this.productController.updateProduct,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
