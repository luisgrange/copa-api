import {Request, Response} from 'express';
import {client} from '../../database/prismaClient';


export class GrupoController{

    public async handleGrupos(req: Request, res: Response){
        const { nome } = req.body;

        const grupos  = await client.grupos.create({
            data:{
                nome
            }
        })

        res.status(200).json(grupos)
    }

    public async handleMostraGrupos(req: Request, res: Response){

        const grupos  = await client.grupos.findMany()

        res.status(200).json({grupos})
    }


    public async handleShowGrupos(req: Request, res: Response){
        const {id} = req.params;

        const grupo = await client.selecoes.findMany({
            where:{gruposId: Number(id)}
        })
        res.json(grupo)

    }

}