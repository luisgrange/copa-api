import {Request, Response} from 'express';
import {client} from '../database/primaClient';


export class SelecaoController{
    public async handleSelecoes (req: Request, res: Response){
        const  {
            id,
            escudo,
            nome,
            pts,  
            vit,
            emp,   
            der,
            gp,
            gc,
            sg     
        } = req.body;

        const selecao = await client.selecoes.create({
            data: {
                id,
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
        });

        return res.json(selecao);
    }
}