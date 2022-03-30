"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.webhookOrderDetecte = exports.findUsers = exports.findOrders = void 0;
const shopify_api_1 = __importStar(require("@shopify/shopify-api"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const shopify = new shopify_api_1.default.Clients.Rest(process.env.SHOPIFYSHOPNAME, process.env.SHOPIFYAUTHTOKEN);
const findOrders = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield shopify.get({
        path: 'orders/count',
        query: {
            "status": "closed"
        }
    });
    const { body } = data;
    response.json(body);
});
exports.findOrders = findOrders;
const findUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield shopify.get({
        path: "customers/count",
        query: {
            "tags": "VIP"
        }
    });
    const { body } = data;
    response.json(body);
});
exports.findUsers = findUsers;
const webhookOrderDetecte = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: orderData } = request;
        const { customer } = orderData;
        if (customer) {
            const { accepts_marketing } = customer;
            let url = `customers/${customer.id}/send_invite`;
            const sendingEmail = yield shopify.post({
                path: url,
                data: {
                    "customer_invite": {}
                },
                type: shopify_api_1.DataType.JSON
            });
            const sendEmailResponse = sendingEmail;
            response.json(sendEmailResponse);
        }
    }
    catch (error) {
        response.json(error);
    }
});
exports.webhookOrderDetecte = webhookOrderDetecte;
