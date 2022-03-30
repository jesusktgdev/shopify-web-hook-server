import express from 'express';
import { findUser } from './controller';

const usuariosRouter = express.Router();

usuariosRouter.get('/', findUser);

export default usuariosRouter;