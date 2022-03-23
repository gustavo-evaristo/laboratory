import { LaboratoryRepository } from '@repositories';
import CreateLaboratoryService from './CreateLaboratoryService';
import CreateLaboratoryController from './CreateLaboratoryController';

export const createLaboratoryController = (): CreateLaboratoryController => {
  const laboratoryRepository = new LaboratoryRepository();
  const laboratoryService = new CreateLaboratoryService(laboratoryRepository);
  const laboratoryController = new CreateLaboratoryController(laboratoryService);

  return laboratoryController;
};
