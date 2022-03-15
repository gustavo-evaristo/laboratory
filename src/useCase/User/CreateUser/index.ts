import { UserRepository } from '@repositories';
import CreateUserService from './CreateUserService';
import CreateUserController from './CreateUserController';

export const createUserController = (): CreateUserController => {
  const userRepository = new UserRepository();
  const userService = new CreateUserService(userRepository);
  const userController = new CreateUserController(userService);

  return userController;
};
