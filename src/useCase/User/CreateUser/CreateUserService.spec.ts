import CreateUserService from './CreateUserService';
import { dbTestConnect, dbClose } from '@database';
import { faker } from '@utils';
import { UserRepository } from '@repositories';

describe('Create user Service', () => {
  let userRepository: UserRepository;
  let createUserService: CreateUserService;
  let emailExists: string;

  beforeAll(async () => {
    userRepository = new UserRepository();
    createUserService = new CreateUserService(userRepository);
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

    emailExists = email;
  });

  it('should not be able to create a new user because user already exists', () => {
    const { name, avatar, password } = faker();

    expect(
      async () =>
        await createUserService.execute({ name, email: emailExists, avatar, password, confirm_password: password }),
    ).rejects.toThrow(new Error('User already exists'));
  });
});
