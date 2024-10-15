import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';
import { v2 as cloudinary } from 'cloudinary';

interface CustomParams {
  folder: string;
}

export const uploader = (folder: string | null, prefixName?: string) => {
  // const mainDir = path.join(__dirname, '../../public');

  // const configFileStore = multer.diskStorage({
  //   destination: (
  //     req: Request,
  //     file: Express.Multer.File,
  //     callback: (error: Error | null, destination: string) => void,
  //   ) => {
  //     const fileDest = dirname ? mainDir + dirname : mainDir;
  //     callback(null, fileDest);
  //   },
  //   filename: (
  //     req: Request,
  //     file: Express.Multer.File,
  //     callback: (error: Error | null, destination: string) => void,
  //   ) => {
  //     const existName = file.originalname.split('.');
  //     const extension = existName[existName.length - 1];
  //     callback(null, `${prefixName || 'MEDIA'}${Date.now()}.${extension}`);
  //   },
  // });

  const storage = multer.memoryStorage();

  // const fileFilter = (
  //   req: Request,
  //   file: Express.Multer.File,
  //   callback: FileFilterCallback,
  // ) => {
  //   const allowedTypes = /jpeg|jpg|png/;
  //   const extName = allowedTypes.test(
  //     path.extname(file.originalname).toLowerCase(),
  //   );
  //   const mimeType = allowedTypes.test(file.mimetype);

  //   if (extName && mimeType) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Only .jpg, .jpeg, and .png files are accepted'));
  //   }
  // };

  return multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: (req, file, callback) => {
      const allowedTypes = /jpeg|jpg|png/;
      const extName = allowedTypes.test(
        path.extname(file.originalname).toLowerCase(),
      );
      const mimeType = allowedTypes.test(file.mimetype);

      if (extName && mimeType) {
        callback(null, true);
      } else {
        callback(new Error('Only .jpg, .jpeg, and .png files are accepted'));
      }
    },
  });
};
