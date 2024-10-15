"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const uuid_1 = require("uuid");
class ProductController {
    createProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, categoryName } = req.body;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                if (!findUser.isVerified) {
                    return res.status(401).send({
                        success: false,
                        message: 'Plese verify your account first',
                    });
                }
                const findCategory = yield prisma_1.default.category.findFirst({
                    where: {
                        categoryName,
                    },
                });
                if (!findCategory) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot find category',
                    });
                }
                const prodCode = 'PRO-' + (0, uuid_1.v4)();
                const newProduct = yield prisma_1.default.product.create({
                    data: {
                        userId: findUser.id,
                        name,
                        price,
                        categoryId: findCategory === null || findCategory === void 0 ? void 0 : findCategory.id,
                        description,
                        isDeleted: false,
                        productCode: prodCode,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Create product success',
                    result: newProduct,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot create your product',
                    error,
                });
            }
        });
    }
    getProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 1, limit = 10, search } = req.query;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                let searchResult = {};
                if (search) {
                    searchResult = {
                        OR: [
                            { productCode: { contains: String(search), mode: 'insensitive' } },
                            { name: { contains: String(search), mode: 'insensitive' } },
                            {
                                category: {
                                    categoryName: { contains: String(search), mode: 'insensitive' },
                                },
                            },
                        ],
                    };
                }
                const productList = yield prisma_1.default.product.findMany({
                    where: Object.assign(Object.assign({}, searchResult), { userId: findUser === null || findUser === void 0 ? void 0 : findUser.id, isDeleted: false }),
                    include: {
                        category: true,
                    },
                    skip: (Number(page) - 1) * Number(limit),
                    take: Number(limit),
                });
                const totalProducts = yield prisma_1.default.product.count({
                    where: Object.assign(Object.assign({}, searchResult), { isDeleted: false, userId: findUser.id }),
                });
                return res.status(200).send({
                    success: true,
                    message: 'Get data success',
                    result: productList,
                    total: totalProducts,
                    page: Number(page),
                    limit: Number(limit),
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get your product',
                    error,
                });
            }
        });
    }
    getProductDetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productCode } = req.params;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
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
                const findProductDetails = yield prisma_1.default.product.findFirst({
                    where: {
                        productCode,
                        userId: findUser.id,
                    },
                    include: {
                        category: true,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Success to get product details',
                    result: findProductDetails,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get product details',
                });
            }
        });
    }
    updateProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, categoryName } = req.body;
            const { productCode } = req.params;
            try {
                const findUser = yield prisma_1.default.user.findUnique({
                    where: {
                        identificationId: res.locals.decrypt.identificationId,
                    },
                });
                if (!findUser) {
                    return res.status(404).send({
                        success: false,
                        message: 'User/Token not found',
                    });
                }
                if (!findUser.isVerified) {
                    return res.status(404).send({
                        success: false,
                        message: 'Please verify first before updating your product',
                    });
                }
                const findOldProduct = yield prisma_1.default.product.findFirst({
                    where: {
                        productCode,
                        userId: findUser.id,
                    },
                });
                if (!findOldProduct) {
                    return res.status(404).send({
                        success: false,
                        message: 'Product not found or does not belong to the user',
                    });
                }
                const findCategory = yield prisma_1.default.category.findFirst({
                    where: {
                        categoryName,
                    },
                });
                if (!findCategory) {
                    return res.status(404).send({
                        success: false,
                        message: 'Category not found',
                    });
                }
                const updateProd = yield prisma_1.default.product.update({
                    data: {
                        name: name ? name : findOldProduct.name,
                        description: description ? description : findOldProduct.description,
                        price: price ? price : findOldProduct.price,
                        categoryId: categoryName
                            ? findCategory.id
                            : findOldProduct.categoryId,
                    },
                    where: {
                        id: findOldProduct.id,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Update product success',
                    result: updateProd,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot update your product',
                    error,
                });
            }
        });
    }
    deleteProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productCodes } = req.body; // Expecting an array of product codes
            try {
                // Find the user based on the identificationId from the token
                const findUser = yield prisma_1.default.user.findUnique({
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
                // Check if the provided product codes exist and belong to the user
                const findProducts = yield prisma_1.default.product.findMany({
                    where: {
                        productCode: { in: productCodes }, // Find all products with these codes
                        userId: findUser.id, // Make sure they belong to the current user
                    },
                });
                if (findProducts.length === 0) {
                    return res.status(404).send({
                        success: false,
                        message: 'No products found for deletion',
                    });
                }
                // Update the isDeleted field for the found products
                yield prisma_1.default.product.updateMany({
                    where: {
                        productCode: { in: productCodes },
                        userId: findUser.id,
                    },
                    data: {
                        isDeleted: true, // Mark the products as deleted
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Products have been deleted',
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot delete your products',
                    error,
                });
            }
        });
    }
    getCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield prisma_1.default.category.findMany({});
                return res.status(200).send({
                    success: true,
                    message: 'Get category success',
                    result: category,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get category',
                });
            }
        });
    }
}
exports.ProductController = ProductController;
