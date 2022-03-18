import 'dotenv/config';
import AuthUserService from './AuthUserService';
import CreateUserService from '../CreateUser/CreateUserService';
import { faker } from '@utils';
import { UserRepository } from '@repositories';

describe('Auth user Service', () => {
  let userRepository: UserRepository;
  let authUserService: AuthUserService;
  let createUserService: CreateUserService;

  beforeAll(async () => {
    userRepository = new UserRepository();
    authUserService = new AuthUserService(userRepository);
    createUserService = new CreateUserService(userRepository);
  });

  it('should not be able to login because email is invalid', () => {
    const { email, password } = faker();

    expect(async () => await authUserService.execute({ email, password })).rejects.toThrow(
      new Error('Invalid email or password'),
    );
  });

  it('should not be able to login because password is invalid', async () => {
    const { name, email, avatar, password } = faker();

    await createUserService.execute({ name, email, avatar, password, confirm_password: password });

    expect(async () => await authUserService.execute({ email, password: '123' })).rejects.toThrow(
      new Error('Invalid email or password'),
    );
  });

  it('should be able to login', async () => {
    const { name, email, avatar, password } = faker();

    await createUserService.execute({ name, email, avatar, password, confirm_password: password });

    const authUser = await authUserService.execute({ email, password });

    expect(authUser).toHaveProperty('user');
    expect(authUser).toHaveProperty('token');
    expect(authUser.user.email).toBe(email);
  });
});
