import { HelpRepository } from '@repositories';
import UpdateHelpService from './UpdateHelpService';
import UpdateHelpController from './UpdateHelpController';

export const updateHelpController = (): UpdateHelpController => {
  const helpRepository = new HelpRepository();
  const helpService = new UpdateHelpService(helpRepository);
  const helpController = new UpdateHelpController(helpService);

  return helpController;
};
