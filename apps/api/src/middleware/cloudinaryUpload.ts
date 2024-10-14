import { NextFunction, Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';

export const cloudinaryUpload = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(req.file?.originalname);

    if (!req.file) {
      return res.status(404).send({
        success: false,
        message: "File doesn't exist",
      });
    }

    // Convert buffer to a stream and upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'image' },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );

      // Pipe the file buffer to the Cloudinary upload stream
      uploadStream.end(req.file?.buffer);
    });

    // Store the secure URL in req.body
    req.body.imageUrl = (result as any).secure_url;
    next();
  } catch (error) {
    console.log(error);
    next({
      success: false,
      message: 'Something wrong with your uploader',
      error,
    });
  }
};
