import { LaboratoryRepository } from '@repositories';
import CreateLaboratoryService from './CreateLaboratoryService';

describe('Create laboratory', () => {
  it('Should be able to register laboratory', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);

    const laboratory = await laboratoryService.execute({ name: 'Laboratorio de Sao Paulo', address: 'Rua bonita' });

    expect(laboratory).toHaveProperty('id');
  });
});
