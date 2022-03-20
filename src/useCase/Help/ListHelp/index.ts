import { HelpRepository } from '@repositories';
import ListHelpService from './ListHelpService';
import ListHelpController from './ListHelpController';

export const listHelpController = (): ListHelpController => {
  const helpRepository = new HelpRepository();
  const helpService = new ListHelpService(helpRepository);
  const helpController = new ListHelpController(helpService);

  return helpController;
};
