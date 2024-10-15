"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const login_1 = require("../middleware/validator/login");
const auth_controller_1 = require("../controllers/auth.controller");
const register_1 = require("../middleware/validator/register");
const express_1 = require("express");
const verifyToken_1 = require("../middleware/verifyToken");
const forgotPassword_1 = require("../middleware/validator/forgotPassword");
const resetPassword_1 = require("../middleware/validator/resetPassword");
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/register', register_1.registerValidation, this.authController.register);
        this.router.post('/login', login_1.loginValidation, this.authController.login);
        this.router.patch('/verify', verifyToken_1.verifyToken, this.authController.verifyEmail);
        this.router.get('/validate', verifyToken_1.verifyToken, this.authController.validateToken);
        this.router.get('/keeplogin', verifyToken_1.verifyToken, this.authController.keepLogin);
        this.router.post('/forgotpass', forgotPassword_1.forgotPassValidation, this.authController.forgotPassword);
        this.router.patch('/resetpass', resetPassword_1.resetPassValidation, verifyToken_1.verifyToken, this.authController.resetPassword);
        this.router.post('/logout', verifyToken_1.verifyToken, this.authController.logout);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
