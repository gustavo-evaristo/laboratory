import request from 'supertest';
import app from '@app';

describe('find exams laboratories test', () => {
  it('Should be able to list all  exams laboratories', async () => {
    const { status, body } = await request(app).get('/exams-laboratories/list');

    expect(status).toBe(200);
    expect(body).toBeTruthy();
  });
});
