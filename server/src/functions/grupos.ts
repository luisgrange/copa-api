import { Request, Response } from 'express';
import {client} from '../database/prismaClient';

export const Grupos = async (req: Request, res: Response) => {

    const selecoes = await client.selecoes.findMany();
    const grupos = [
        {
            "grupo-1": []
        }
    ]

    for(let s=0; s<selecoes.length; s++){
        if(s%4 == 0){
            
        }
    }



    res.status(200).json(grupos);
}