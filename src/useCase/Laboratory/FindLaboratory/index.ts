import { LaboratoryRepository } from '@repositories';
import FindLaboratoryService from './FindLaboratoryService';
import FindLaboratoryController from './FindLaboratoryController';

export const findLaboratoryController = (): FindLaboratoryController => {
  const laboratoryRepository = new LaboratoryRepository();
  const laboratoryService = new FindLaboratoryService(laboratoryRepository);
  const laboratoryController = new FindLaboratoryController(laboratoryService);

  return laboratoryController;
};
