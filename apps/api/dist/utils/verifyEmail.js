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
exports.sendEmailVerify = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAILER,
        pass: process.env.PASS_MAILER,
    },
});
const sendEmailVerify = (emailTo, subject, content, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urlLink = `http://localhost:3000/verify/${data === null || data === void 0 ? void 0 : data.token}`;
        const templatePath = path_1.default.join(__dirname, '../templates', 'verifyEmail.hbs');
        const templateSource = fs_1.default.readFileSync(templatePath, 'utf-8');
        const compileTemplates = handlebars_1.default.compile(templateSource);
        const generateTemplate = compileTemplates(Object.assign(Object.assign({}, data), { urlLink }));
        yield transporter.sendMail({
            from: process.env.MAILER,
            to: emailTo,
            subject,
            html: generateTemplate,
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.sendEmailVerify = sendEmailVerify;
