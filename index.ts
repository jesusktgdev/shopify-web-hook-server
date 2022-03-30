import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usuariosRouter from './src/usuarios/router';
import shopifyRouter from './src/shopify/router'

dotenv.config();
const App = express();
const corsOptions = {
    origin: ["https://jesus-gradi-store.myshopify.com"]
};
App.use( cors(corsOptions) );
App.use(express.json());
App.use('/api/v1/usuarios', usuariosRouter);
App.use('/api/v1/shopify', shopifyRouter);

const port = process.env.PORT || 27055;

App.get('/', (request, response) => {
    response.send('Hello people');
});


App.listen(port, () => {
    console.log(`Server on ${port}`);
});