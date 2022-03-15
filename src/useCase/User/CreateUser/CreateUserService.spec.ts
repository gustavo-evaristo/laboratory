import CreateUserService from './CreateUserService';
import { getTestDbConnection, closeTestDbConnection } from '@database';
import { faker } from '@utils';
import { UserRepository } from '@repositories';

describe('Create user Service', () => {
  let userRepository: UserRepository;
  let createUserService: CreateUserService;
  let userName;

  beforeAll(async () => {
    await getTestDbConnection();

    userRepository = new UserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  afterAll(async () => {
    await closeTestDbConnection();
  });

  it('should not be able to create a new user because passwords doesnt match', async () => {
    const { name, email, avatar, password } = faker();

    expect(
      async () => await createUserService.execute({ name, email, avatar, password, confirm_password: '123' }),
    ).rejects.toThrow(new Error('Invalid Password'));
  });

  it('Should be able to create a new User', async () => {
    const { name, email, avatar, password } = faker();

    const user = await createUserService.execute({ name, email, avatar, password, confirm_password: password });

    expect(user.email).toBe(email);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('created_at');

    userName = name;
  });

  it('should not be able to create a new user because user already exists', async () => {
    const { email, avatar, password } = faker();

    expect(
      async () =>
        await createUserService.execute({ name: userName, email, avatar, password, confirm_password: password }),
    ).rejects.toThrow(new Error('User Already Exists'));
  });
});
