"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createToken = (data, expiresIn) => {
    return (0, jsonwebtoken_1.sign)(data, process.env.TOKEN_KEY || 'b4c380a7-d58f-49a7-8512-f5273f8178e1', {
        expiresIn: expiresIn || '1h',
    });
};
exports.createToken = createToken;
