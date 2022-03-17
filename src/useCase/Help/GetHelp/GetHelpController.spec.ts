import app from '@app';
import { dbConnect, dbClose } from '@database';
import request from 'supertest';

describe('Get Help Controller', () => {
  beforeAll(async () => {
    await dbConnect();
  });

  afterAll(async () => {
    await dbClose();
  });

  it('Should be able to get help', async () => {
    const { status, body } = await request(app).get(`/help/${1}`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('created_at');
  });
});
