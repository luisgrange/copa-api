import { app } from '../../app';
import request from 'supertest';

describe("Grupo controller", () => {
    it("Should be able to create", async () => {
      const response = await request(app)
      .post('/api/v2/grupos').send({
            "nome" : "URSS"
        });

        console.log(response.status);
    })
    it("Should be able to view", async () => {
        const response = await request(app)
        .get('/api/v2/grupo/id/').query({id:1})
        
  
          console.log(response.status);
      })
})