import 'reflect-metadata';
import request from 'supertest';

import { createApp } from './main';

describe('GraphQL API', () => {
  it('returns hello world', async () => {
    const app = await createApp();
    const query = {
      query: '{ greeting { message } }',
    };
    const response = await request(app).post('/graphql').send(query);
    expect(response.status).toBe(200);
    expect(response.body.data.greeting).toEqual({ message: 'Hello World!' });
  });
});
