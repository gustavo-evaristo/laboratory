import { HelpRepository } from '@repositories';
import CreateHelpService from './CreateHelpService';
import CreateHelpController from './CreateHelpController';

export const createHelpController = (): CreateHelpController => {
  const helpRepository = new HelpRepository();
  const helpService = new CreateHelpService(helpRepository);
  const helpController = new CreateHelpController(helpService);

  return helpController;
};
