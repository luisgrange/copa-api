import {Request, Response} from 'express';
import {client} from '../../database/prismaClient';


export class JogosController{

    public async handleJogos(req: Request, res: Response){
        const {fkId_sel1, fkId_sel2, gol1, gol2} = req.body;

        const jogos  = await client.jogos.create({
            data:{
                fkId_sel1,
                fkId_sel2,
                gol1,
                gol2
            }
        })

        res.status(200).json(jogos)
    }

    public async handleUpdateJogos(req: Request, res: Response){
        const {id} = req.params
        const {gol1, gol2} = req.body;

        const jogos = await client.jogos.update({
            where: {id_jogo: Number(id)},
            data: {gol1, gol2}
        })

        res.status(200).json(jogos)
    }


}