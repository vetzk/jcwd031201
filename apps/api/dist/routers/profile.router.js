"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRouter = void 0;
const profile_controller_1 = require("../controllers/profile.controller");
const cloudinaryUpload_1 = require("../middleware/cloudinaryUpload");
const uploader_1 = require("../middleware/uploader");
const createProfile_1 = require("../middleware/validator/createProfile");
const updateProfile_1 = require("../middleware/validator/updateProfile");
const verifyToken_1 = require("../middleware/verifyToken");
const express_1 = require("express");
class ProfileRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.profileController = new profile_controller_1.ProfileController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('', verifyToken_1.verifyToken, (0, uploader_1.uploader)('/profile', 'USR').single('img'), cloudinaryUpload_1.cloudinaryUpload, createProfile_1.createProfileValidation, this.profileController.createProfile);
        this.router.get('', verifyToken_1.verifyToken, this.profileController.getProfile);
        this.router.patch('', verifyToken_1.verifyToken, (0, uploader_1.uploader)('/profile', 'USR').single('img'), cloudinaryUpload_1.cloudinaryUpload, updateProfile_1.updateProfileValidation, this.profileController.updateProfile);
    }
    getRouter() {
        return this.router;
    }
}
exports.ProfileRouter = ProfileRouter;
