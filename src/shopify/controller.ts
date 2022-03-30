import {Request, Response} from "express";
import Shopify, {DataType} from "@shopify/shopify-api";
import dotenv from 'dotenv';

dotenv.config();

const shopify = new Shopify.Clients.Rest(process.env.SHOPIFYSHOPNAME, process.env.SHOPIFYAUTHTOKEN);

const findOrders = async (request: Request, response: Response) => {
    const data = await shopify.get({
        path: 'orders/count',
        query: {
            "status": "closed"
        }
    });
    const { body } = data;
    
    response.json(body);
};

const findUsers = async (request: Request, response: Response) => {
    const data = await shopify.get({
        path: "customers/count",
        query: {
            "tags": "VIP"
        }
    });

    const { body } = data;

    response.json(body);
};

const webhookOrderDetecte = async (request: Request, response: Response) => {
    try {
        const { body: orderData } = request;
        const { customer } = orderData;
        if( customer ){
            const { accepts_marketing } = customer;
            let url = `customers/${customer.id}/send_invite`;
            const sendingEmail = await shopify.post({
                path: url,
                data: {
                    "customer_invite": {}
                },
                type: DataType.JSON
            });

            const sendEmailResponse = sendingEmail;

            response.json(sendEmailResponse);
        }
    } catch(error){
        response.json(error);
    }
};

export { findOrders, findUsers, webhookOrderDetecte };