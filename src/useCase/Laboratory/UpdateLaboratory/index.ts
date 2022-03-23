import { LaboratoryRepository } from '@repositories';
import UpdateLaboratoryService from './UpdateLaboratoryService';
import UpdateLaboratoryController from './UpdateLaboratoryController';

export const updateLaboratoryController = (): UpdateLaboratoryController => {
  const laboratoryRepository = new LaboratoryRepository();
  const laboratoryService = new UpdateLaboratoryService(laboratoryRepository);
  const laboratoryController = new UpdateLaboratoryController(laboratoryService);

  return laboratoryController;
};
