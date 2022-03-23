import request from 'supertest';
import app from '@app';
import { ExamsLaboratoriesRepository } from '@repositories';
import CreatExamsLaboratoriesService from './CreateExamsLaboratoriesService';

describe('Create exams laboratories test', () => {
  it('Should not be able to register exams laboratories because fields are invalid', async () => {
    const response = await request(app).post('/exams-laboratories/create').send({
      laboratory: 1,
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid fields');
  });

  it('Should be able to register exam', async () => {
    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();

    const examsLaboratoriesService = new CreatExamsLaboratoriesService(examsLaboratoriesRepository);

    const exam = await examsLaboratoriesService.execute({ laboratory: 1, exam: 1 });

    expect(exam).toHaveProperty('id');
  });
});
