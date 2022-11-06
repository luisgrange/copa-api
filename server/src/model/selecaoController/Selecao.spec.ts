import { app } from '../../app';
import request from 'supertest';

describe("Selecao controller", () => {
    it("Should be able to create", async () => {
      const response = await request(app)
      .post('/api/v2/selecoes/cadastro').send({
            "escudo": "Teste",
            "nome": "Time de teste",
            "pts": 0,  
            "vit": 0,
            "emp": 0,   
            "der": 0,
            "gp": 0,
            "gc": 0,
            "sg": 0,
            "gruposId": 1
        });

        console.log(response.status);
    })
})