"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uploader = (folder, prefixName) => {
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
    const storage = multer_1.default.memoryStorage();
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
    return (0, multer_1.default)({
        storage,
        limits: { fileSize: 1 * 1024 * 1024 },
        fileFilter: (req, file, callback) => {
            const allowedTypes = /jpeg|jpg|png/;
            const extName = allowedTypes.test(path_1.default.extname(file.originalname).toLowerCase());
            const mimeType = allowedTypes.test(file.mimetype);
            if (extName && mimeType) {
                callback(null, true);
            }
            else {
                callback(new Error('Only .jpg, .jpeg, and .png files are accepted'));
            }
        },
    });
};
exports.uploader = uploader;
