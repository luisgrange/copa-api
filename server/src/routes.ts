import { Router, urlencoded } from 'express';
import { grupoController } from './controller/grupoController';

export const router = Router();

const data = [
    {
        "Grupo A":[
            {
                "Nome":"Brasil",
                "Escudo":"Imagem do brasil",
                "Pts":0,
                "GM":0,
                "GC":0,
                "SG":0,
                "PJ":0,
                "Vit":0,
                "Der":0,
                "Emp":0

            }
        ]
    }
]

const grupo = new grupoController();

router.post('/api/v1/cadastro', grupo.handle);


router.get("/api/v1/grupos", grupo.handleSelecao)