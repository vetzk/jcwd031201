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
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const hash_1 = require("../utils/hash");
const jwt_1 = require("../utils/jwt");
const verifyEmail_1 = require("../utils/verifyEmail");
const uuid_1 = require("uuid");
const bcrypt_1 = require("bcrypt");
const emailResetPass_1 = require("../utils/emailResetPass");
const date_fns_1 = require("date-fns");
const auth_service_1 = require("../services/auth.service");
class AuthController {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, username, password, confirmPassword } = req.body;
            try {
                const findEmail = yield (0, auth_service_1.findEmailExist)(email);
                const findUsername = yield (0, auth_service_1.findUsernameExist)(username);
                console.log(findEmail);
                console.log(findUsername);
                if (findEmail) {
                    return res.status(401).send({
                        success: false,
                        message: 'Email already exist',
                    });
                }
                if (findUsername) {
                    return res.status(401).send({
                        success: false,
                        message: 'Username already exist',
                    });
                }
                const identId = 'ID-' + (0, uuid_1.v4)();
                const user = yield prisma_1.default.user.create({
                    data: {
                        email,
                        username,
                        password: yield (0, hash_1.hashPassword)(password),
                        identificationId: identId,
                    },
                });
                const token = (0, jwt_1.createToken)({
                    identificationId: user.identificationId,
                    email: user.email,
                    username: user.username,
                }, '24h');
                yield (0, verifyEmail_1.sendEmailVerify)(user.email, 'Verify Email', null, {
                    email: user.email,
                    token,
                });
                return res.status(200).send({
                    success: true,
                    message: 'Create account success',
                    result: {
                        token,
                        identificationId: user.identificationId,
                        email: user.email,
                        username: user.username,
                        isVerified: user.isVerified,
                    },
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot register your account',
                    error,
                });
            }
        });
    }
    verifyEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.user.update({
                    where: {
                        identificationId: res.locals.decrypt.identificationId,
                    },
                    data: {
                        isVerified: true,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Your email has been verified',
                });
            }
            catch (error) {
                console.log(error);
                next({ success: false, message: 'Cannot verify email', error });
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const BLOCK_TIME = 5 * 60 * 1000;
            try {
                const findUser = yield (0, auth_service_1.findUserAuth)(username);
                if (!findUser) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot find your username',
                    });
                }
                if (findUser.sessionToken) {
                    return res.status(403).send({
                        success: false,
                        message: 'You are already logged in from another device. Please log out first.',
                    });
                }
                const currentTime = new Date().getTime();
                const lastLoginAttemptTime = new Date(findUser.lastLoginAttempt).getTime();
                if (findUser.isBlocked &&
                    currentTime - lastLoginAttemptTime >= BLOCK_TIME) {
                    const updatedTime = yield prisma_1.default.user.update({
                        where: {
                            username,
                        },
                        data: {
                            loginAttempt: 0,
                            isBlocked: false,
                        },
                    });
                    findUser.isBlocked = false;
                    findUser.loginAttempt = 0;
                }
                if (findUser.isBlocked) {
                    if (currentTime - lastLoginAttemptTime < BLOCK_TIME) {
                        const timeLeftUntilLogin = BLOCK_TIME - (currentTime - lastLoginAttemptTime);
                        const timeInMinutes = Math.ceil(timeLeftUntilLogin / (60 * 1000));
                        return res.status(403).send({
                            success: false,
                            message: `Too many login attempts. Try again in ${timeInMinutes} minutes`,
                        });
                    }
                }
                const comparePassword = (0, bcrypt_1.compareSync)(password, findUser.password);
                if (!comparePassword) {
                    const userLoginAttempt = yield prisma_1.default.user.update({
                        where: {
                            username,
                        },
                        data: {
                            loginAttempt: findUser.loginAttempt + 1,
                            lastLoginAttempt: new Date(),
                        },
                    });
                    if (findUser.loginAttempt >= 5) {
                        yield prisma_1.default.user.update({
                            where: {
                                username,
                            },
                            data: {
                                isBlocked: true,
                                lastLoginAttempt: new Date(),
                            },
                        });
                        return res.status(403).send({
                            success: false,
                            message: `Too many login attempts. You can try again after 5 minutes`,
                        });
                    }
                    return res.status(401).send({
                        success: false,
                        message: 'Wrong password',
                        result: userLoginAttempt,
                    });
                }
                const token = (0, jwt_1.createToken)({
                    identificationId: findUser.identificationId,
                    email: findUser.email,
                    username: findUser.username,
                }, '24h');
                yield prisma_1.default.user.update({
                    where: {
                        username,
                    },
                    data: {
                        sessionToken: token,
                        loginAttempt: 0,
                        lastLoginAttempt: new Date(),
                        isBlocked: false,
                    },
                });
                const findProfile = yield prisma_1.default.userprofile.findFirst({
                    where: {
                        userId: findUser.id,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Login success',
                    result: {
                        identificationId: findUser.identificationId,
                        email: findUser.email,
                        profilePicture: findProfile === null || findProfile === void 0 ? void 0 : findProfile.profilePicture,
                        username: findUser.username,
                        isVerified: findUser.isVerified,
                        token,
                    },
                });
            }
            catch (error) {
                console.log(error);
                next({ success: false, message: 'Failed to login', error });
            }
        });
    }
    keepLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findUser = yield (0, auth_service_1.findUserId)(res.locals.decrypt.identificationId);
                if (!findUser) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot find user',
                    });
                }
                const token = (0, jwt_1.createToken)({
                    identificationId: findUser.identificationId,
                    email: findUser.email,
                }, '24h');
                return res.status(200).send({
                    success: true,
                    result: {
                        identificationId: findUser.identificationId,
                        username: findUser.username,
                        email: findUser.email,
                        isVerified: findUser.isVerified,
                        token,
                    },
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Keep Login function failed',
                    error,
                });
            }
        });
    }
    forgotPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            try {
                const findEmail = yield (0, auth_service_1.findUserViaEmail)(email);
                if (!findEmail) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot find your email',
                    });
                }
                const token = (0, jwt_1.createToken)({
                    email: findEmail.email,
                    identificationId: findEmail.identificationId,
                    username: findEmail.username,
                }, '20m');
                const expiryTime = (0, date_fns_1.addMinutes)(new Date(), 20);
                yield prisma_1.default.user.update({
                    where: {
                        email,
                    },
                    data: {
                        resetToken: token,
                        resetTokenExpiry: expiryTime,
                    },
                });
                yield (0, emailResetPass_1.sendResetEmail)(findEmail.email, 'Password Reset', null, {
                    email: findEmail.email,
                    token,
                });
                return res.status(200).send({
                    success: true,
                    message: 'Account exist. Please reset your password',
                    result: token,
                });
            }
            catch (error) {
                console.log(error);
                next({ success: false, message: 'Forgot password function failed' });
            }
        });
    }
    resetPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.params;
            const { password } = req.body;
            try {
                if (!res.locals.decrypt.identificationId) {
                    return res.status(404).send({
                        success: false,
                        message: 'Cannot find user',
                    });
                }
                const user = yield prisma_1.default.user.findFirst({
                    where: {
                        resetToken: token,
                        resetTokenExpiry: {
                            gte: new Date(),
                        },
                    },
                });
                if (!user) {
                    return res.status(404).send({
                        success: false,
                        message: 'Invalid or expired token',
                    });
                }
                yield prisma_1.default.user.update({
                    data: {
                        password: yield (0, hash_1.hashPassword)(password),
                        resetToken: null,
                        resetTokenExpiry: null,
                    },
                    where: {
                        identificationId: res.locals.decrypt.identificationId,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Reset password success',
                });
            }
            catch (error) {
                console.log(error);
                next({ success: false, message: 'Cannot reset your password', error });
            }
        });
    }
    validateToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.body;
            try {
                const findToken = yield prisma_1.default.user.findFirst({
                    where: {
                        resetToken: token,
                        identificationId: res.locals.decrypt.identificationId,
                    },
                });
                if (!findToken) {
                    return res.status(401).send({
                        success: false,
                        message: 'Token has expired',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Success to get your token',
                    result: findToken.resetToken,
                });
            }
            catch (error) {
                next({
                    success: false,
                    message: 'Cannot validate your token',
                    error,
                });
            }
        });
    }
    logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.user.update({
                    where: {
                        identificationId: res.locals.decrypt.identificationId,
                    },
                    data: {
                        sessionToken: null,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Logout success',
                });
            }
            catch (error) {
                console.log(error);
                next({ success: false, message: 'Failed to logout', error });
            }
        });
    }
}
exports.AuthController = AuthController;
