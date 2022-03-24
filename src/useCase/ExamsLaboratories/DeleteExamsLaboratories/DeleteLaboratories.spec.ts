import request from 'supertest';
import app from '@app';
import ExamsLaboratoriesService from './DeleteExamsLaboratoriesService';
import { ExamsLaboratoriesRepository } from '@repositories';

describe('Delete exams laboratories test', () => {
  it('Should not be able to delete exams laboratories because fields are invalid', async () => {
    const { status, body } = await request(app).delete('/exams-laboratories/delete');

    expect(status).toBe(400);
    expect(body.error).toBe('Invalid fields');
  });

  it('Should not be able to delete exams laboratories because id is invalid', async () => {
    const { status, body } = await request(app).delete('/exams-laboratories/delete');

    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
    const examsLaboratoriesService = new ExamsLaboratoriesService(examsLaboratoriesRepository);

    expect(async () => await examsLaboratoriesService.execute(500)).rejects.toThrow(
      new Error('Exams laboratories not exists'),
    );

    expect(status).toBe(400);
    expect(body.error).toBe('Invalid fields');
  });
});
