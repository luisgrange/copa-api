import { Router } from 'express';
import { SelecaoController } from './controller/selecaoController';
import { GrupoController } from './controller/grupoController';
import { jogosController } from './controller/jogosController';
import { vencedorController } from './controller/vencedorController';

export const router = Router();


const createSelecao = new SelecaoController();
const grupos = new GrupoController();
const jogos = new jogosController();
const vencedor = new vencedorController();

router.post('/api/v1/selecao-cadastro', createSelecao.handleSelecoes);  // ROTA PARA CADASTRO DE SELEÇÕES
router.get('/api/v1/selecoes',createSelecao.handleGetSelecoes);         // ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES
router.get('/api/v1/selecao/id/:id',createSelecao.handleGetSelecao);    // ROTA PARA VISUALIZAÇÃO DA SELEÇÃO ÚNICA
router.put('/api/v1/selecao-update/id/:id',createSelecao.handleUpdateSelecao);    // ROTA PARA UPDATE DE SELEÇÕES


router.post('/api/v1/grupos', grupos.handleGrupos);
router.get('/api/v1/grupo/id/:id',grupos.handleShowGrupos);    // ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES POR GRUPO


router.post('/api/v1/jogos-cadastro', jogos.handleJogos);
router.put('/api/v1/jogos/update/id/:id', jogos.handleUpdateJogos);


router.get('/api/v1/vencedores/id/:id', vencedor.handleVencedor);