import express from 'express';
import { findOrders, findUsers, webhookOrderDetecte } from './controller';


const shopifyRouter = express.Router();

shopifyRouter.get('/orders', findOrders);
shopifyRouter.get('/users', findUsers);
shopifyRouter.all('/weebhookorders', webhookOrderDetecte);

export default shopifyRouter;