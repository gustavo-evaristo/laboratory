import { HelpRepository } from '@repositories';
import GetHelpService from './GetHelpService';
import GetHelpController from './GetHelpController';

export const getHelpController = (): GetHelpController => {
  const helpRepository = new HelpRepository();
  const helpService = new GetHelpService(helpRepository);
  const helpController = new GetHelpController(helpService);

  return helpController;
};
