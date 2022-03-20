import CreateHelpService from '../CreateHelp/CreateHelpService';
import UpdateHelpService from './UpdateHelpService';
import CreateUserService from '../../User/CreateUser/CreateUserService';
import { HelpRepository, UserRepository } from '@repositories';
import { faker } from '@utils';

describe('Update Help Service', () => {
  let helpRepository: HelpRepository;
  let userRepository: UserRepository;

  let createHelpService: CreateHelpService;
  let updateHelpService: UpdateHelpService;

  let userService: CreateUserService;

  beforeAll(async () => {
    helpRepository = new HelpRepository();
    userRepository = new UserRepository();

    createHelpService = new CreateHelpService(helpRepository);
    updateHelpService = new UpdateHelpService(helpRepository);

    userService = new CreateUserService(userRepository);
  });

  it('should not be able to update a help because doesnt exist', () => {
    expect(
      async () => await updateHelpService.execute({ id: 10, values: { title: 'Update Help Failed' } }),
    ).rejects.toThrow(new Error('Failed to update help'));
  });

  it('should be able to update a help', async () => {
    const { name, email, password, title, description, category } = faker();

    await userService.execute({ name, email, password, confirm_password: password });

    await createHelpService.execute({ title, description, category, owner: 1, is_private: false });

    const help = await updateHelpService.execute({ id: 1, values: { title: 'Help Updated' } });

    expect(help).toBeTruthy();
  });
});
