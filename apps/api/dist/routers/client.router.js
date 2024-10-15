"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRouter = void 0;
const client_controller_1 = require("../controllers/client.controller");
const verifyToken_1 = require("../middleware/verifyToken");
const express_1 = require("express");
class ClientRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.clientController = new client_controller_1.ClientController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('', verifyToken_1.verifyToken, this.clientController.getClient);
    }
    getRouter() {
        return this.router;
    }
}
exports.ClientRouter = ClientRouter;
