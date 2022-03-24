import request from 'supertest';
import app from '@app';
import { ExamRepository } from '@repositories';
import UpdateExamService from './UpdateExamService';
import CreateExamService from '../CreateExam/CreateExamService';

describe('Update exam test', () => {
  it('Should not be able to update exam because fields are invalid', async () => {
    const { status, body } = await request(app).put('/exam/update');

    expect(status).toBe(400);
    expect(body.error).toBe('Invalid fields');
  });

  it('Should not be able to update exam because id is invalid', () => {
    const examRepository = new ExamRepository();

    const examService = new UpdateExamService(examRepository);

    expect(async () => await examService.execute({ id: 500 })).rejects.toThrow(new Error('Exam not exists'));
  });

  it('Should be able to update exam', async () => {
    const examRepository = new ExamRepository();

    const examService = new UpdateExamService(examRepository);

    const createExamService = new CreateExamService(examRepository);

    const { id } = await createExamService.execute({ name: 'Exame teste', type: 'Teste' });

    const exam = await examService.execute({ id, values: { name: 'exame atualizado' } });

    expect(exam).toBeTruthy();
  });
});
