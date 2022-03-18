import CreateHelpService from './CreateHelpService';
import CreateUserService from '../../User/CreateUser/CreateUserService';
import { dbClose } from '@database';
import { HelpRepository, UserRepository } from '@repositories';
import { faker } from '@utils';

describe('Create Help Service', () => {
  let helpRepository: HelpRepository;
  let userRepository: UserRepository;
  let createHelpService: CreateHelpService;
  let createUserService: CreateUserService;

  beforeAll(async () => {
    helpRepository = new HelpRepository();
    createHelpService = new CreateHelpService(helpRepository);

    userRepository = new UserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  it('should be able to create a new help', async () => {
    const { name, email, avatar, password, title, description, category } = faker();

    const { id: owner } = await createUserService.execute({
      name,
      email,
      avatar,
      password,
      confirm_password: password,
    });

    const help = await createHelpService.execute({
      title,
      description,
      category,
      owner,
      file: avatar,
      is_private: false,
    });

    expect(help).toHaveProperty('id');
    expect(help).toHaveProperty('owner');
    expect(help).toHaveProperty('created_at');
  });
});
