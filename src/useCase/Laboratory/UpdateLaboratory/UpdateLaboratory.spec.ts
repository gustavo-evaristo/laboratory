import { LaboratoryRepository } from '@repositories';
import UpdateLaboratoryService from './UpdateLaboratoryService';
import CreateLaboratoryService from '../CreateLaboratory/CreateLaboratoryService';
import request from 'supertest';
import app from '@app';

describe('Update laboratory', () => {
  it('Should not be able to update laboratory because fields are invalid', async () => {
    const { status, body } = await request(app).put('/laboratory/update');

    expect(status).toBe(400);

    expect(body.error).toBe('Invalid fields');
  });

  it('Should not be able to update laboratory because id is invalid', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new UpdateLaboratoryService(laboratoryRepository);

    expect(async () => await laboratoryService.execute({ id: 500 })).rejects.toThrow(
      new Error('Laboratory not exists'),
    );
  });

  it('Should be able to update laboratory', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new UpdateLaboratoryService(laboratoryRepository);

    const createLaboratoryService = new CreateLaboratoryService(laboratoryRepository);

    const { id } = await createLaboratoryService.execute({ name: 'Laboratorio Teste', address: 'Rua teste' });

    const laboratory = await laboratoryService.execute({
      id,
      values: { name: 'Laboratorio Teste atualizado', address: 'Rua Teste Atualizada' },
    });

    expect(laboratory).toBeTruthy();
  });
});
