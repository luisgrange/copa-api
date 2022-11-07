import {Request, Response} from 'express';
import {client} from '../../database/prismaClient';


export class VencedorController{
    public async handleVencedor(req: Request, res: Response){
        const {id} = req.params;

        const jogo = await client.jogos.findUnique({
            where:{id_jogo: Number(id)}
        });

        let selecao = Number(jogo?.gol1) > Number(jogo?.gol2) ? 
            await client.selecoes.findUnique({where:{id: Number(jogo?.fkId_sel1)}}) : 
            await client.selecoes.findUnique({where:{id: Number(jogo?.fkId_sel2)}})

        const vencedor = await client.vencedores.create({
            data:{
                fk_id: Number(id),
                vencedor: String(selecao?.nome)
            }
        })


        res.status(200).json(vencedor);
    }


}