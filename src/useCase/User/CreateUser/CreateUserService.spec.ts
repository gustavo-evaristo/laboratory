import CreateUserService from './CreateUserService';
import { dbConnect, dbClose } from '@database';
import { faker } from '@utils';
import { UserRepository } from '@repositories';

describe('Create user Service', () => {
  let userRepository: UserRepository;
  let createUserService: CreateUserService;
  let userName: string;

  beforeAll(async () => {
    await dbConnect();

    userRepository = new UserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  afterAll(async () => {
    await dbClose();
  });

  it('should not be able to create a new user because passwords doesnt match', () => {
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

  it('should not be able to create a new user because user already exists', () => {
    const { email, avatar, password } = faker();

    expect(
      async () =>
        await createUserService.execute({ name: userName, email, avatar, password, confirm_password: password }),
    ).rejects.toThrow(new Error('User Already Exists'));
  });
});
