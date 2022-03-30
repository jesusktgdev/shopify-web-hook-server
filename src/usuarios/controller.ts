import { Request, Response } from 'express';
import modelUsers from './model';

const findUser = async (req: Request, res: Response) => {

    const model = new modelUsers();

    model.findUser( (error: any, respond: any) => {

        if(error){
            return res.json({error}).status(500);
        }

        return res.json(respond);

    } );
};

export { findUser };