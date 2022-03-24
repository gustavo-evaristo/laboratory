import { LaboratoryRepository } from '@repositories';
import DeleteLaboratoryService from './DeleteLaboratoryService';
import CreateLaboratoryService from '../CreateLaboratory/CreateLaboratoryService';
import request from 'supertest';
import app from '@app';

describe('Delete laboratory', () => {
  it('Should be able to delete laboratory', async () => {
    const { status, body } = await request(app).delete('/laboratory/delete');

    expect(status).toBe(400);
    expect(body.error).toBe('Invalid fields');
  });

  it('Should not be able to delete laboratory because id is invalid', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new DeleteLaboratoryService(laboratoryRepository);

    expect(async () => await laboratoryService.execute(500)).rejects.toThrow(new Error('Laboratory not exists'));
  });

  it('Should be able to delete laboratory in batch', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const createLaboratoryService = new CreateLaboratoryService(laboratoryRepository);

    const { id: first_id } = await createLaboratoryService.execute({
      name: 'novo laboratorio',
      address: 'endereco de test',
    });

    const { id: second_id } = await createLaboratoryService.execute({
      name: 'novo laboratorio',
      address: 'endereco de test',
    });

    const { status } = await request(app)
      .delete('/laboratory/delete-in-batch')
      .send({ laboratories: [first_id, second_id] });

    expect(status).toBe(200);
  });

  it('Should be able to delete laboratory', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new DeleteLaboratoryService(laboratoryRepository);

    const createLaboratoryService = new CreateLaboratoryService(laboratoryRepository);

    const { id } = await createLaboratoryService.execute({ name: 'novo laboratorio', address: 'endereco de test' });

    const laboratory = await laboratoryService.execute(id);

    expect(laboratory).toBeTruthy();
  });
});
