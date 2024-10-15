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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryUpload = void 0;
const cloudinary_1 = require("cloudinary");
const cloudinaryUpload = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname);
        if (!req.file) {
            return res.status(404).send({
                success: false,
                message: "File doesn't exist",
            });
        }
        // Convert buffer to a stream and upload to Cloudinary
        const result = yield new Promise((resolve, reject) => {
            var _a;
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({ folder: 'image' }, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
            // Pipe the file buffer to the Cloudinary upload stream
            uploadStream.end((_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer);
        });
        // Store the secure URL in req.body
        req.body.imageUrl = result.secure_url;
        next();
    }
    catch (error) {
        console.log(error);
        next({
            success: false,
            message: 'Something wrong with your uploader',
            error,
        });
    }
});
exports.cloudinaryUpload = cloudinaryUpload;
