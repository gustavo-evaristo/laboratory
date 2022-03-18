import app from '@app';
import { dbTestConnect, dbClose } from '@database';
import { faker } from '@utils';
import request from 'supertest';

describe('Auth user Controller', () => {
  it('Should not be able to login because email or password is invalid', async () => {
    const { email, password } = faker();

    const response = await request(app).post('/user/auth').send({
      email,
      password,
    });

    expect(response).toHaveProperty('status');
    expect(response.status).toBe(406);

    expect(response).toHaveProperty('body');
    expect(response.body.error).toBe('Invalid email or password');
  });

  it('Should be able to login', async () => {
    const { name, avatar, email, password } = faker();

    await request(app).post('/user/create').send({
      name,
      email,
      avatar,
      password,
      confirm_password: password,
    });

    const { status, body } = await request(app).post('/user/auth').send({
      email,
      password,
    });

    expect(status).toBe(200);

    expect(body).toHaveProperty('token');

    expect(body).toHaveProperty('user');
    expect(body.user.email).toBe(email);
  });
});
