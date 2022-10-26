import { Router } from 'express';
import { SelecaoController } from './controller/selecaoController';

export const router = Router();



const createSelecao = new SelecaoController();

// ROTA PARA CADASTRO DE SELEÇÕES
router.post('/api/v1/selecao-CADASTRO', createSelecao.handleSelecoes);

// ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES

router.get('/api/v1/selecoes',createSelecao.handleGetSelecoes);

// ROTA PARA VISUALIZAÇÃO DA SELEÇÃO ÚNICA
router.get('/api/v1/selecao/id/:id',createSelecao.handleGetSelecao);

router.get('/api/v1/selecoes', (req, res) => {
    return res.status(200).json({"message": "hello"});
})

