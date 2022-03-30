"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./src/usuarios/router"));
const router_2 = __importDefault(require("./src/shopify/router"));
dotenv_1.default.config();
const App = (0, express_1.default)();
const corsOptions = {
    origin: ["https://jesus-gradi-store.myshopify.com"]
};
App.use((0, cors_1.default)(corsOptions));
App.use(express_1.default.json());
App.use('/api/v1/usuarios', router_1.default);
App.use('/api/v1/shopify', router_2.default);
const port = process.env.PORT || 27055;
App.get('/', (request, response) => {
    response.send('Hello people');
});
App.listen(port, () => {
    console.log(`Server on ${port}`);
});
