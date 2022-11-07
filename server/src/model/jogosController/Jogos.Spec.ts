import { app } from '../../app';
import request from 'supertest';

describe("Jogos controller", () => {
    it("Should be able to create", async () => {
      const response = await request(app)
      .post('/api/v2/jogos-cadastro').send({
        "fkId_sel1": 1,
        "fkId_sel2":2,
        "gol1":2,
        "gol2":2
        });

        console.log(response.status);
    })
    it("Should be able to view", async () => {
        const response = await request(app)
        .put('/api/v2/jogos/update/id/').query({id:1})
        
  
          console.log(response.status);
      })
})