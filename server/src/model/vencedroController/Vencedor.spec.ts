import { app } from '../../app';
import request from 'supertest';

describe("Vencedor controller", () => {
    it("Should be able to create", async () => {
      const response = await request(app)
      .get('/api/v2/vencedor/id/').query({id:1})

        console.log(response.status);
    })
    
})