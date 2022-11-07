import { Router } from 'express';




import { selecaoController } from '../model/selecaoController/SelecaoFactory';
import { grupoController } from '../model/grupoController/GrupoFactory';
import { jogosController } from '../model/jogosController/JogosFactory';
import { vencedorController} from '../model/vencedroController/VencedorFactory';
import { SelecaoController } from '../model/selecaoController/SelecaoController';
import { GrupoController } from '../model/grupoController';
import { jogosController } from '../model/jogosController';
import { vencedorController } from '../model/vencedorController';
import { selecaoController } from '../model/selecaoController/SelecaoFactory';

export const router = Router();




const createSelecao = new SelecaoController();
const grupos = new GrupoController();
const jogos = new jogosController();
const vencedor = new vencedorController();


router.post('/api/v2/selecoes/cadastro', selecaoController().handleCreateSelecoes);  // ROTA PARA CADASTRO DE SELEÇÕES
router.get('/api/v2/selecoes', selecaoController().handleGetSelecoes);         // ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES
router.get('/api/v2/selecao/id/:id', selecaoController().handleGetSelecao);    // ROTA PARA VISUALIZAÇÃO DA SELEÇÃO ÚNICA
router.put('/api/v2/selecao-update/id/:id',selecaoController().handleUpdateSelecao);    // ROTA PARA UPDATE DE SELEÇÕES


router.post('/api/v2/grupos', grupoController().handleGrupos);
router.get('/api/v2/grupo/id/:id',grupoController().handleShowGrupos);    // ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES POR GRUPO


router.post('/api/v2/jogos-cadastro', jogosController().handleJogos);
router.put('/api/v2/jogos/update/id/:id', jogosController().handleUpdateJogos);


router.get('/api/v2/vencedor/id/:id', vencedorController().handleVencedor);

router.post('/api/v1/grupos', grupos.handleGrupos);
router.get('/api/v1/grupo/id/:id',grupos.handleShowGrupos);    // ROTA PARA VISUALIZAÇÃO DAS SELEÇÕES POR GRUPO


router.post('/api/v1/jogos-cadastro', jogos.handleJogos);
router.put('/api/v1/jogos/update/id/:id', jogos.handleUpdateJogos);


router.get('/api/v1/vencedores/id/:id', vencedor.handleVencedor);

