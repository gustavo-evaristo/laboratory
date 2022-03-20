import CreateHelpService from '../CreateHelp/CreateHelpService';
import DeleteHelpService from './DeleteHelpService';
import CreateUserService from '../../User/CreateUser/CreateUserService';
import { HelpRepository, UserRepository } from '@repositories';
import { faker } from '@utils';

describe('Delete Help Service', () => {
  let helpRepository: HelpRepository;
  let userRepository: UserRepository;

  let createHelpService: CreateHelpService;
  let deleteHelpService: DeleteHelpService;

  let userService: CreateUserService;

  beforeAll(async () => {
    helpRepository = new HelpRepository();
    userRepository = new UserRepository();

    createHelpService = new CreateHelpService(helpRepository);
    deleteHelpService = new DeleteHelpService(helpRepository);

    userService = new CreateUserService(userRepository);
  });

  it('should not be able to delete a help because doesnt exist', () => {
    expect(async () => await deleteHelpService.execute(10)).rejects.toThrow(new Error('Failed to delete help'));
  });

  it('should be able to delete a help', async () => {
    const { name, email, password, title, description, category } = faker();

    await userService.execute({ name, email, password, confirm_password: password });

    await createHelpService.execute({ title, description, category, owner: 1, is_private: false });

    const help = await deleteHelpService.execute(1);

    expect(help).toBeTruthy();
  });
});
