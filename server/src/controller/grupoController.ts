import {Request, Response} from 'express';
import {client} from '../database/prismaClient';


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

/*         const selecoes = [
            {id: 1,nome:"grupo 1", selecoes_ids:[1,2,3,4]},
            {id: 2,nome:"Grupo 2", selecoes_ids:[1,2,3,4]},
            {id: 3,nome:"Grupo 3", selecoes_ids:[1,2,3,4]},
            {id: 4,nome:"Grupo 4", selecoes_ids:[1,2,3,4]},
            {id: 5,nome:"Grupo 5", selecoes_ids:[1,2,3,4]},
            {id: 6,nome:"Grupo 6", selecoes_ids:[1,2,3,4]},
        ]

        while (i < 4) {
            selecoes_ids[32]
            selecoes[32].status=false;

        } */


        //where id 1 insert selecoes_ids (1,4,5)

    }

}