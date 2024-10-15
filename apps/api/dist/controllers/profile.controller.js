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
exports.ProfileController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class ProfileController {
    createProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, companyName, address, phone } = req.body;
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
                const createProfile = yield prisma_1.default.userprofile.create({
                    data: {
                        userId: findUser.id,
                        firstName,
                        lastName,
                        companyName,
                        address,
                        phone,
                        profilePicture: req.body.imageUrl,
                        // profilePicture: `/assets/profile/${req.file?.filename}`,
                        isCreated: true,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Create profile success',
                    result: createProfile,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot create your profile',
                    error,
                });
            }
        });
    }
    getProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const findProfile = yield prisma_1.default.userprofile.findFirst({
                    where: {
                        userId: findUser.id,
                    },
                });
                return res.status(200).send({
                    success: true,
                    message: 'Get profile success',
                    result: {
                        findProfile,
                        // findPaymentDetails,
                    },
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot get your profile',
                    error,
                });
            }
        });
    }
    updateProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, companyName, address, phone, paymentType, bankAccount, accountName, accountNumber, } = req.body;
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
                const findProfile = yield prisma_1.default.userprofile.findFirst({
                    where: { userId: findUser.id },
                });
                if (findProfile === null || findProfile === void 0 ? void 0 : findProfile.profilePicture) {
                    const oldImagePath = path_1.default.join(__dirname, '../../public', findProfile.profilePicture);
                    if (fs_1.default.existsSync(oldImagePath)) {
                        fs_1.default.unlinkSync(oldImagePath);
                    }
                }
                // const findPaymentType = await prisma.paymentoptions.findFirst({
                //   where: { paymentType },
                // });
                // if (!findPaymentType) {
                //   return res.status(404).send({
                //     success: false,
                //     message: 'Cannot find payment type',
                //   });
                // }
                // const findPaymentDetails = await prisma.paymentdetails.findFirst({
                //   where: {
                //     userId: findUser.id,
                //   },
                // });
                const updatedProfile = yield prisma_1.default.userprofile.update({
                    where: {
                        id: findProfile === null || findProfile === void 0 ? void 0 : findProfile.id,
                    },
                    data: {
                        address: address ? address : findProfile === null || findProfile === void 0 ? void 0 : findProfile.address,
                        firstName: firstName ? firstName : findProfile === null || findProfile === void 0 ? void 0 : findProfile.firstName,
                        lastName: lastName ? lastName : findProfile === null || findProfile === void 0 ? void 0 : findProfile.lastName,
                        phone: phone ? phone : findProfile === null || findProfile === void 0 ? void 0 : findProfile.lastName,
                        companyName: companyName ? companyName : findProfile === null || findProfile === void 0 ? void 0 : findProfile.companyName,
                        // paymentOptId: paymentType
                        //   ? findPaymentType?.id
                        //   : findProfile?.paymentOptId,
                        profilePicture: req.file
                            ? `/assets/profile/${req.file.filename}`
                            : findProfile === null || findProfile === void 0 ? void 0 : findProfile.profilePicture,
                    },
                });
                // if (paymentType === 'BANK_TRANSFER' && findPaymentDetails) {
                //   await prisma.paymentdetails.update({
                //     data: {
                //       accountName: accountName
                //         ? accountName
                //         : findPaymentDetails?.accountName,
                //       accountNumber: accountNumber
                //         ? accountNumber
                //         : findPaymentDetails?.accountNumber,
                //       bankAccount: bankAccount
                //         ? bankAccount
                //         : findPaymentDetails?.bankAccount,
                //     },
                //     where: {
                //       id: findPaymentDetails?.id,
                //     },
                //   });
                // } else {
                //   await prisma.paymentdetails.create({
                //     data: {
                //       userId: findUser.id,
                //       paymentOptId: findPaymentType?.id,
                //       accountName: accountName
                //         ? accountName
                //         : findPaymentDetails?.accountName,
                //       accountNumber: accountNumber
                //         ? accountNumber
                //         : findPaymentDetails?.accountNumber,
                //       bankAccount: bankAccount
                //         ? bankAccount
                //         : findPaymentDetails?.bankAccount,
                //     },
                //   });
                // }
                return res.status(200).send({
                    success: true,
                    message: 'Update profile success',
                    result: updatedProfile,
                });
            }
            catch (error) {
                console.log(error);
                next({
                    success: false,
                    message: 'Cannot update your profile',
                    error,
                });
            }
        });
    }
}
exports.ProfileController = ProfileController;
