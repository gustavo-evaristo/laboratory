import request from 'supertest';
import app from '@app';
import { ExamRepository } from '@repositories';
import DeleteExamService from './DeleteExamService';
import CreateExamService from '../CreateExam/CreateExamService';

describe('Delete exam test', () => {
  it('Should not be able to delete exam because fields are invalid', async () => {
    const { status, body } = await request(app).delete('/exam/delete');

    expect(status).toBe(400);
    expect(body.error).toBe('Invalid fields');
  });

  it('Should not be able to delete exam because id is invalid', () => {
    const examRepository = new ExamRepository();

    const examService = new DeleteExamService(examRepository);

    expect(async () => await examService.execute(500)).rejects.toThrow(new Error('Exam not exists'));
  });

  it('Should be able to delete exam in batch', async () => {
    const examRepository = new ExamRepository();

    const createExamService = new CreateExamService(examRepository);

    const { id: id_first } = await createExamService.execute({ name: 'exame de test 1', type: 'teste 1' });
    const { id: id_second } = await createExamService.execute({ name: 'exame de test 2', type: 'teste 2' });

    const { status } = await request(app)
      .delete('/exam/delete-in-batch')
      .send({ exams: [id_first, id_second] });

    expect(status).toBe(200);
  });

  it('Should be able to delete exam', async () => {
    const examRepository = new ExamRepository();

    const examService = new DeleteExamService(examRepository);

    const createExamService = new CreateExamService(examRepository);

    const { id } = await createExamService.execute({ name: 'exame de test', type: 'teste' });

    const exam = await examService.execute(id);

    expect(exam).toBeTruthy();
  });
});
