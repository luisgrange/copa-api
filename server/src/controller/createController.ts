import { Request, Response } from 'express';
import { client } from '../database/client';

export class selecoesController{
    async handleCreate(req:Request, res:Response){
        const {escudo, nome, pts, vit, emp, der, gp, gc, sg} = req.body
        const selecoes = await client.selecoes.create({
            data:{
                escudo,
                nome,
                pts,
                vit,
                emp,
                der,
                gp,
                gc,
                sg
            }
        })

        return res.json(selecoes)
    }

    async handleRetrieve(req:Request, res:Response){
        const selecoes = await client.selecoes.findMany()

        return res.json(selecoes)
    }
}