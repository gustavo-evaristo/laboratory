import { LaboratoryRepository } from '@repositories';
import CreatLaboratoryService from './CreateLaboratoryService';

describe('Create exam service', () => {
  it('Should not be able to register exam', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new CreatLaboratoryService(laboratoryRepository);

    const laboratory = await laboratoryService.execute({ name: 'Laboratorio de Sao Paulo', address: 'Rua bonita' });

    expect(laboratory).toHaveProperty('id');
  });
});
