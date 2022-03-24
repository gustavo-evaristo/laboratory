import request from 'supertest';
import app from '@app';

describe('Find laboratory test', () => {
  it('Should be able to list all laboratories', async () => {
    const { status, body } = await request(app).get('/laboratory/list');

    expect(status).toBe(200);
    expect(body).toBeTruthy();
  });
});
