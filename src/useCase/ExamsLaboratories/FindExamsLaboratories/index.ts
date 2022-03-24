import { ExamsLaboratoriesRepository } from '@repositories';
import FindExamsLaboratoriesService from './FindExamsLaboratoriesService';
import FindExamsLaboratoriesController from './FindExamsLaboratoriesController';

export const findExamsLaboratoriesController = (): FindExamsLaboratoriesController => {
  const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
  const examsLaboratoriesService = new FindExamsLaboratoriesService(examsLaboratoriesRepository);
  const examsLaboratoriesController = new FindExamsLaboratoriesController(examsLaboratoriesService);

  return examsLaboratoriesController;
};
