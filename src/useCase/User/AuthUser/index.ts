import { UserRepository } from '@repositories';
import AuthUserService from './AuthUserService';
import AuthUserController from './AuthUserController';

export const authUserController = (): AuthUserController => {
  const userRepository = new UserRepository();
  const authUserService = new AuthUserService(userRepository);
  const authUserController = new AuthUserController(authUserService);

  return authUserController;
};
