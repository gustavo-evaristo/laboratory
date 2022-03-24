import { ExamsLaboratoriesRepository } from '@repositories';
import DeleteExamsLaboratoriesService from './DeleteExamsLaboratoriesService';
import DeleteExamsLaboratoriesController from './DeleteExamsLaboratoriesController';

export const deleteExamsLaboratoriesController = (): DeleteExamsLaboratoriesController => {
  const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
  const examsLaboratoriesService = new DeleteExamsLaboratoriesService(examsLaboratoriesRepository);
  const examsLaboratoriesController = new DeleteExamsLaboratoriesController(examsLaboratoriesService);

  return examsLaboratoriesController;
};
