"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const shopifyRouter = express_1.default.Router();
shopifyRouter.get('/orders', controller_1.findOrders);
shopifyRouter.get('/users', controller_1.findUsers);
shopifyRouter.all('/weebhookorders', controller_1.webhookOrderDetecte);
exports.default = shopifyRouter;
