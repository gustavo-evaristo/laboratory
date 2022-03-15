import CreateUserService from './CreateUserService';
import { getTestDbConnection, closeTestDbConnection } from '@database';
import { faker } from '@utils';
import { UserRepository } from '@repositories';

describe('Create user Service', () => {
  let userRepository: UserRepository;
  let createUserService: CreateUserService;

  beforeAll(async () => {
    await getTestDbConnection();

    userRepository = new UserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  afterAll(async () => {
    await closeTestDbConnection();
  });

  it('Should be able to create a new User', async () => {
    const { name, email, avatar, password, confirm_password } = faker();

    const user = await createUserService.execute({ name, email, avatar, password, confirm_password });

    expect(user.email).toBe(email);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('created_at');
  });
});
