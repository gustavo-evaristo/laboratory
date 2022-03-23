import { LaboratoryRepository } from '@repositories';
import UpdateLaboratoryService from './UpdateLaboratoryService';
import request from 'supertest';
import app from '@app';

describe('Update laboratory', () => {
  it('Should not be able to update laboratory because id is invalid', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new UpdateLaboratoryService(laboratoryRepository);

    expect(async () => await laboratoryService.execute({ id: 500 })).rejects.toThrow(
      new Error('Laboratory not exists'),
    );
  });

  it('Should be able to update laboratory', async () => {
    const { status } = await request(app)
      .put('/laboratory/update')
      .send({
        id: 2,
        values: { name: 'laboratorio atualizado', address: 'novo endereco' },
      });

    expect(status).toBe(200);
  });
});
