import { Router } from 'express';
import { selecoesController } from './controller/createController';

export const router = Router();

const create_selecao = new selecoesController();

router.post('/api/v1/create', create_selecao.handleCreate);

router.get('/api/v1/selecoes', create_selecao.handleRetrieve)