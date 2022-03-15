import { getTestDbConnection, closeTestDbConnection } from '@database';
import { faker, request } from '@utils';
import app from '@app';

describe('Create user Controller', () => {
  beforeAll(async () => {
    await getTestDbConnection();
  });

  afterAll(async () => {
    await closeTestDbConnection();
  });

  it('should be able to create a new user on the /user/create endpoint', async () => {
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
