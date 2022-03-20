import { HelpRepository } from '@repositories';
import DeleteHelpService from './DeleteHelpService';
import DeleteHelpController from './DeleteHelpController';

export const deleteHelpController = (): DeleteHelpController => {
  const helpRepository = new HelpRepository();
  const helpService = new DeleteHelpService(helpRepository);
  const helpController = new DeleteHelpController(helpService);

  return helpController;
};
