import { LaboratoryRepository } from '@repositories';
import DeleteLaboratoryService from './DeleteLaboratoryService';
import CreateLaboratoryService from '../CreateLaboratory/CreateLaboratoryService';
import request from 'supertest';
import app from '@app';

describe('Delete laboratory', () => {
  it('Should not be able to delete laboratory because id is invalid', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new DeleteLaboratoryService(laboratoryRepository);

    expect(async () => await laboratoryService.execute(500)).rejects.toThrow(new Error('Laboratory not exists'));
  });

  it('Should be able to delete laboratory', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);

    const { id } = await laboratoryService.execute({ name: 'novo laboratorio', address: 'endereco de test' });

    const { status } = await request(app).delete('/laboratory/delete').send({
      id,
    });

    expect(status).toBe(200);
  });
});
