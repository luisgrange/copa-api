import { app } from '../../app';
import request from 'supertest';

function generateRandom(max:Number = 5){
    return Number(Math.floor(Math.random() * Number(max)));
}

describe("Selecao controller", () => {

    it("Should be able to create", async () => {
      const response = await request(app)
      .post('/api/v2/selecoes/cadastro').send({
            "escudo": "Teste",
            "nome": "Time de teste",
            "pts": generateRandom(7),  
            "vit": generateRandom(7),
            "emp": generateRandom(7),   
            "der": generateRandom(7),
            "gp": generateRandom(7),
            "gc": generateRandom(7),
            "sg": generateRandom(7),
            "gruposId": 1
        });

        console.log(response.status);
    });

    it("Should be able to view", async () => {
        const response = await request(app)
        .get('/api/v2/selecoes/')
  
          console.log(response.status);
      });

      it("Should be able to update", async () => {
        const response = await request(app)
        .put('/api/v2/selecao-update/id/')
        .query({id: 1})
        .send({
            "pts": generateRandom(7),  
            "vit": generateRandom(7),
            "emp": generateRandom(7),   
            "der": generateRandom(7),
            "gp": generateRandom(7),
            "gc": generateRandom(7),
            "sg": generateRandom(7),
        })
  
          console.log(response.status);
      });

})