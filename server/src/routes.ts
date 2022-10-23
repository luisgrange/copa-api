import { Router } from 'express';

export const router = Router();


router.get('/api/v1/selecoes', (req, res) => {
    return res.status(200).json({"message": "hellos"});
})