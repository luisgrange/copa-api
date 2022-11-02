import { Router } from 'express';
import { SelecaoController } from './controller/selecaoController';
import { GrupoController } from './controller/grupoController';

export const router = Router();



const createSelecao = new SelecaoController();
const grupos = new GrupoController();

router.post('/api/v1/selecao-CADASTRO', createSelecao.handleSelecoes);  // ROTA PARA CADASTRO DE SELEÇÕES

router.get('/api/v1/selecoes',createSelecao.handleGetSelecoes);         // ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES

router.get('/api/v1/selecao/id/:id',createSelecao.handleGetSelecao);    // ROTA PARA VISUALIZAÇÃO DA SELEÇÃO ÚNICA




router.get('/api/v1/grupos', grupos.handleSetGrupos);

