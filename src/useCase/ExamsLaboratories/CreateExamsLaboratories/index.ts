import { ExamsLaboratoriesRepository } from '@repositories';
import CreateExamsLaboratoriesService from './CreateExamsLaboratoriesService';
import CreateExamsLaboratoriesController from './CreateExamsLaboratoriesController';

export const createExamsLaboratoriesController = (): CreateExamsLaboratoriesController => {
  const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
  const examsLaboratoriesService = new CreateExamsLaboratoriesService(examsLaboratoriesRepository);
  const examsLaboratoriesController = new CreateExamsLaboratoriesController(examsLaboratoriesService);

  return examsLaboratoriesController;
};
