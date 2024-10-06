import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export class ProductController {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    const { name, description, price, categoryName } = req.body;
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

      if (!findUser.isVerified) {
        return res.status(401).send({
          success: false,
          message: 'Plese verify your account first',
        });
      }

      const findCategory = await prisma.category.findFirst({
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

      const prodCode = 'PRO-' + uuid();

      const newProduct = await prisma.product.create({
        data: {
          userId: findUser.id,
          name,
          price,
          categoryId: findCategory?.id,
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
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot create your product',
        error,
      });
    }
  }

  async getProduct(req: Request, res: Response, next: NextFunction) {
    const { page = 1, limit = 10, search } = req.query;
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

      const productList = await prisma.product.findMany({
        where: { ...searchResult, userId: findUser?.id, isDeleted: false },
        include: {
          category: true,
        },
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
      });

      const totalProducts = await prisma.product.count({
        where: {
          ...searchResult,
          isDeleted: false,
          userId: findUser.id,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Get data success',
        result: productList,
        total: totalProducts,
        page: Number(page),
        limit: Number(limit),
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get your product',
        error,
      });
    }
  }

  async getProductDetails(req: Request, res: Response, next: NextFunction) {
    const { productCode } = req.params;
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

      const findProductDetails = await prisma.product.findFirst({
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
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get product details',
      });
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    const { name, description, price, categoryName } = req.body;
    const { productCode } = req.params;

    try {
      const findUser = await prisma.user.findUnique({
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

      const findOldProduct = await prisma.product.findFirst({
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

      const findCategory = await prisma.category.findFirst({
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

      const updateProd = await prisma.product.update({
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
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot update your product',
        error,
      });
    }
  }

  async deleteProducts(req: Request, res: Response, next: NextFunction) {
    const { productCodes } = req.body; // Expecting an array of product codes

    try {
      // Find the user based on the identificationId from the token
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

      // Check if the provided product codes exist and belong to the user
      const findProducts = await prisma.product.findMany({
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
      await prisma.product.updateMany({
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
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot delete your products',
        error,
      });
    }
  }

  async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await prisma.category.findMany({});
      return res.status(200).send({
        success: true,
        message: 'Get category success',
        result: category,
      });
    } catch (error) {
      console.log(error);
      next({
        success: false,
        message: 'Cannot get category',
      });
    }
  }
}
