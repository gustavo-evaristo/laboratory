import { LaboratoryRepository } from '@repositories';
import CreateLaboratoryService from './CreateLaboratoryService';
import app from '@app';
import request from 'supertest';

describe('Create laboratory test', () => {
  it('Should not be able to register laboratory because fields are invalid', async () => {
    const { status, body } = await request(app)
      .post('/laboratory/create-in-batch')
      .send({ name: 'Laboratorio teste sem endereco' });

    expect(status).toBe(400);
    expect(body.error).toBe('Invalid fields');
  });

  it('Should be able to register laboratory in batch', async () => {
    const laboratories = [
      { name: 'Laboratorio de Sao Paulo teste 1', address: 'Rua bonita 1' },
      { name: 'Laboratorio de Sao Paulo teste 2', address: 'Rua bonita 2' },
    ];

    const { status } = await request(app).post('/laboratory/create-in-batch').send({ laboratories });

    expect(status).toBe(200);
  });

  it('Should be able to register laboratory', async () => {
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);

    const laboratory = await laboratoryService.execute({ name: 'Laboratorio de Sao Paulo', address: 'Rua bonita' });

    expect(laboratory).toHaveProperty('id');
  });
});
