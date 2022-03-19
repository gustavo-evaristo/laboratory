import ListHelpService from './ListHelpService';
import CreateHelpService from '../CreateHelp/CreateHelpService';
import CreateUserService from '../../User/CreateUser/CreateUserService';
import { HelpRepository, UserRepository } from '@repositories';
import { faker } from '@utils';

describe('List Help Service', () => {
  let helpRepository: HelpRepository;
  let listHelpService: ListHelpService;
  let createHelpService: CreateHelpService;

  let userRepository: UserRepository;
  let userService: CreateUserService;

  beforeAll(async () => {
    helpRepository = new HelpRepository();
    listHelpService = new ListHelpService(helpRepository);
    createHelpService = new CreateHelpService(helpRepository);

    userRepository = new UserRepository();
    userService = new CreateUserService(userRepository);
  });

  it('should not be able to get a helps because is empty', async () => {
    const helps = await listHelpService.execute();
    expect(helps).toEqual([]);
  });

  it('should be able to list a help', async () => {
    const { name, email, password, title, description, category } = faker();

    const { id: owner } = await userService.execute({ name, email, password, confirm_password: password });

    await createHelpService.execute({ title, description, category, owner, is_private: false });

    const help = await listHelpService.execute();

    expect(help).toHaveLength(1);
  });
});
