"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const product_controller_1 = require("../controllers/product.controller");
const createProduct_1 = require("../middleware/validator/createProduct");
const updateProduct_1 = require("../middleware/validator/updateProduct");
const verifyToken_1 = require("../middleware/verifyToken");
const express_1 = require("express");
class ProductRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.productController = new product_controller_1.ProductController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/category', this.productController.getCategory);
        this.router.patch('/delete', verifyToken_1.verifyToken, this.productController.deleteProducts);
        this.router.post('', createProduct_1.createProductValidation, verifyToken_1.verifyToken, this.productController.createProduct);
        this.router.get('', verifyToken_1.verifyToken, this.productController.getProduct);
        this.router.get('/:productCode', verifyToken_1.verifyToken, this.productController.getProductDetails);
        this.router.patch('/:productCode', updateProduct_1.updateProductValidation, verifyToken_1.verifyToken, this.productController.updateProduct);
    }
    getRouter() {
        return this.router;
    }
}
exports.ProductRouter = ProductRouter;
