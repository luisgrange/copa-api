import {Request, Response} from 'express';
import { client } from '../database/prismaClient';

export class grupoController {

    async handle(req: Request, res: Response){
        const {Nome, Escudo, Pts, GM, GC, SG, PJ, Vit, Der, Emp} = req.body

        const grupo = await client.user.create({
            data: {
                nome: Nome,
                pts: Pts,
                GM: GM,
                GC: GC,
                SG: SG,
                PJ: PJ,
                Vitorias: Vit,
                Derrotas: Der,
                Empates:  Emp
            }
        });
        return res.json(grupo)
    }

    async handleSelecao(req: Request, res: Response){
        const grupo = await client.user.findUnique(
            {
                where:{id: 1},
                select: {
                    nome: true,
                    Vitorias: true
                }
            }
        )
        
        res.json(grupo);
    }
}