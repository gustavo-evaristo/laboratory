import request from 'supertest';
import app from '@app';
import { ExamRepository } from '@repositories';
import CreatExamService from './CreateExamService';

describe('Create exam test', () => {
  it('Should not be able to register exam because fields are invalid', async () => {
    const { status, body } = await request(app).post('/exam/create');

    expect(status).toBe(400);

    expect(body.error).toBe('Invalid fields');
  });

  it('Should be able to register exam in batch', async () => {
    const exams = [
      { name: 'Exame de Sangue 1', type: 'Analise clínica 1' },
      { name: 'Exame de Sangue 2', type: 'Analise clínica 2' },
    ];

    const { status } = await request(app).post('/exam/create-in-batch').send({ exams });

    expect(status).toBe(200);
  });

  it('Should be able to register exam', async () => {
    const examRepository = new ExamRepository();

    const examService = new CreatExamService(examRepository);

    const exam = await examService.execute({ name: 'Exame de Sangue', type: 'Analise clínica' });

    expect(exam).toHaveProperty('id');
  });
});
