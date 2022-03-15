import app from '@app';
import { dbConnect, dbClose } from '@database';
import { faker } from '@utils';
import request from 'supertest';

describe('Create user Service', () => {
  beforeAll(async () => {
    await dbConnect();
  });

  afterAll(async () => {
    await dbClose();
  });

  it('Should be able to create a new User', async () => {
    const { name, email, avatar, password } = faker();

    const { status, body } = await request(app).post('/user/create').send({
      name,
      email,
      avatar,
      password,
      confirm_password: password,
    });

    expect(status).toBe(200);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('created_at');
  });
});
