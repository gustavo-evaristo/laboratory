import request from 'supertest';
import app from '@app';

describe('Find exam test', () => {
  it('Should be able to list all exams', async () => {
    const { status, body } = await request(app).get('/exam/list');

    expect(status).toBe(200);
    expect(body).toBeTruthy();
  });
});
