import GetHelpService from './GetHelpService';
import CreateHelpService from '../CreateHelp/CreateHelpService';
import CreateUserService from '../../User/CreateUser/CreateUserService';
import { dbTestConnect, dbClose } from '@database';
import { HelpRepository, UserRepository } from '@repositories';
import { faker } from '@utils';

describe('Get Help Service', () => {
  let helpRepository: HelpRepository;
  let getHelpService: GetHelpService;
  let createHelpService: CreateHelpService;

  let userRepository: UserRepository;
  let userService: CreateUserService;

  beforeAll(async () => {
    helpRepository = new HelpRepository();
    getHelpService = new GetHelpService(helpRepository);
    createHelpService = new CreateHelpService(helpRepository);

    userRepository = new UserRepository();
    userService = new CreateUserService(userRepository);
  });

  it('should not be able to get a help because  because it doesnt exist', () => {
    expect(async () => await getHelpService.execute(1)).rejects.toThrow(new Error('Help not exists'));
  });

  it('should be able to get a help', async () => {
    const { name, email, password, title, description, category } = faker();

    const { id: owner } = await userService.execute({ name, email, password, confirm_password: password });

    const { id } = await createHelpService.execute({ title, description, category, owner, is_private: false });

    const help = await getHelpService.execute(id);

    expect(help).toHaveProperty('id');
  });
});
