import { LaboratoryRepository } from '@repositories';
import DeleteLaboratoryService from './DeleteLaboratoryService';
import DeleteLaboratoryController from './DeleteLaboratoryController';

export const deleteLaboratoryController = (): DeleteLaboratoryController => {
  const laboratoryRepository = new LaboratoryRepository();
  const laboratoryService = new DeleteLaboratoryService(laboratoryRepository);
  const laboratoryController = new DeleteLaboratoryController(laboratoryService);

  return laboratoryController;
};
