import {Request, Response} from 'express';
import {client} from '../database/prismaClient';


export class SelecaoController{

    // CRIA UMA SELEÇÃO
    public async handleSelecoes (req: Request, res: Response){
        const  {
            escudo,
            nome,
            pts,  
            vit,
            emp,   
            der,
            gp,
            gc,
            sg,
            gruposId
        } = req.body;

        const selecao = await client.selecoes.create({
            data:{
                escudo,
                nome,
                pts,  
                vit,
                emp,   
                der,
                gp,
                gc,
                sg,
                gruposId
            }
        });
        return res.json(selecao);
    }

    // MOSTRA TODAS SELEÇÕES
    public async handleGetSelecoes (req: Request, res: Response){
        const selecoes = await client.selecoes.findMany();
        return res.status(200).json({selecoes});
    }

    // MOSTRA UMA ÚNICA SELEÇÃO
    public async handleGetSelecao (req: Request, res: Response){
        const {id} = req.params;
        const selecao = await client.selecoes.findUnique(
            {
                where:{
                    id: Number(id)
                }
            }
        );

       res.status(200).json(selecao);
    }


    // UPDATE EM UMA ÚNICA SELEÇÃO
    public async handleUpdateSelecao(req: Request, res: Response){
        const id = req.query.id;
        const { pts, vit, emp, der, gp, gc, sg } = req.body;

        const selecaoUpdate = await client.selecoes.update({
            where:{
                id:Number(id)
            },
            data:{
                pts, 
                vit, 
                emp, 
                der, 
                gp, 
                gc, 
                sg
            }
        });

        res.status(200).json(selecaoUpdate);
    }

    public async handleShowByGroup(req: Request, res:Response){
        const {id} = req.params;

        const grupo = await client.selecoes.findMany({
            where:{gruposId: Number(id)}
        })
    }

}