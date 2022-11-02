import {Request, Response} from 'express';
import {client} from '../database/prismaClient';


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

    public async handleGetSelecoes (req: Request, res: Response){
        const selecoes = await client.selecoes.findMany();

<<<<<<< Updated upstream
        
        return res.status(200).json({selecoes});
    }

    public async handleGetSelecao (req: Request, res: Response){
        const id = req.params.id;
=======
        // selecoes.forEach((selecao)=>{
        //     console.log (selecao);
        // })

        return res.json(...selecoes);
    }

    public async handleGetSelecao (req: Request, res: Response){
        const id = req.query.id;
>>>>>>> Stashed changes
        const selecao = await client.selecoes.findUnique(
            {
                where:{
                    id:Number(id) 
                }
            }
        );

<<<<<<< Updated upstream
=======
        // selecoes.forEach((selecao)=>{
        //     console.log (selecao);
        // })

>>>>>>> Stashed changes
        return res.json(selecao);
    }
      

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
}