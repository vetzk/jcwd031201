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
exports.findUserId = exports.findUserAuth = exports.findUsernameExist = exports.findUserViaEmail = exports.findEmailExist = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const findEmailExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailUser = yield prisma_1.default.user.findUnique({
            where: {
                email,
            },
        });
        if (emailUser) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return error;
    }
});
exports.findEmailExist = findEmailExist;
const findUserViaEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailUser = yield prisma_1.default.user.findUnique({
            where: {
                email,
            },
        });
        if (emailUser) {
            return emailUser;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return error;
    }
});
exports.findUserViaEmail = findUserViaEmail;
const findUsernameExist = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                username,
            },
        });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return error;
    }
});
exports.findUsernameExist = findUsernameExist;
const findUserAuth = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                username,
            },
        });
        if (user) {
            return user;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return error;
    }
});
exports.findUserAuth = findUserAuth;
const findUserId = (identificationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                identificationId,
            },
        });
        if (user) {
            return user;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return error;
    }
});
exports.findUserId = findUserId;
