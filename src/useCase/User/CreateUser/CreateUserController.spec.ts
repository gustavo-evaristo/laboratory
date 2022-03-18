import app from '@app';
import { faker } from '@utils';
import request from 'supertest';

describe('Create user Controller', () => {
  let emailExists: string;

  it('Should not be able to create a new User because password doesnt match', async () => {
    const { name, email, avatar, password } = faker();

    const response = await request(app).post('/user/create').send({
      name,
      email,
      avatar,
      password,
      confirm_password: '123',
    });

    expect(response).toHaveProperty('status');
    expect(response.status).toBe(406);
    expect(response).toHaveProperty('body');
    expect(response.body.error).toBe('Invalid Password');
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

    emailExists = email;
  });

  it('Should not be able to create a new User because user already exists', async () => {
    const { name, avatar, password } = faker();

    const response = await request(app).post('/user/create').send({
      name,
      email: emailExists,
      avatar,
      password,
      confirm_password: password,
    });

    expect(response).toHaveProperty('status');
    expect(response.status).toBe(406);
    expect(response).toHaveProperty('body');
    expect(response.body.error).toBe('User already exists');
  });
});
