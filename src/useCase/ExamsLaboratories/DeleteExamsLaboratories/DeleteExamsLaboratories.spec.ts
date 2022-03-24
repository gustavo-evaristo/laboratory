import request from 'supertest';
import app from '@app';
import ExamsLaboratoriesService from './DeleteExamsLaboratoriesService';
import { ExamRepository, ExamsLaboratoriesRepository, LaboratoryRepository } from '@repositories';
import CreateExamService from '../../Exam/CreateExam/CreateExamService';
import CreateLaboratoryService from '../../Laboratory/CreateLaboratory/CreateLaboratoryService';
import CreateExamsLaboratoriesService from '../CreateExamsLaboratories/CreateExamsLaboratoriesService';

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

  it('Should be able to delete exams laboratories in batch', async () => {
    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
    const examRepository = new ExamRepository();
    const laboratoryRepository = new LaboratoryRepository();

    const examService = new CreateExamService(examRepository);
    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);
    const createExamsLaboratoriesService = new CreateExamsLaboratoriesService(examsLaboratoriesRepository);
    const examsLaboratoriesService = new ExamsLaboratoriesService(examsLaboratoriesRepository);

    const { id: first_exam } = await examService.execute({ name: 'teste de exame', type: 'teste' });
    const { id: second_exam } = await examService.execute({ name: 'teste de exame', type: 'teste' });
    const { id: laboratory } = await laboratoryService.execute({ name: 'teste de laboratorio', address: 'Rua teste' });

    const { id: first_exams_laboratories_id } = await createExamsLaboratoriesService.execute({
      laboratory,
      exam: first_exam,
    });

    const { id: second_exams_laboratories_id } = await createExamsLaboratoriesService.execute({
      laboratory,
      exam: second_exam,
    });

    const { status } = await request(app)
      .delete('/exams-laboratories/delete-in-batch')
      .send({ examsLaboratories: [first_exams_laboratories_id, second_exams_laboratories_id] });

    expect(status).toBe(200);
  });

  it('Should be able to delete exams laboratories', async () => {
    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
    const examRepository = new ExamRepository();
    const laboratoryRepository = new LaboratoryRepository();

    const examService = new CreateExamService(examRepository);
    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);
    const createExamsLaboratoriesService = new CreateExamsLaboratoriesService(examsLaboratoriesRepository);
    const examsLaboratoriesService = new ExamsLaboratoriesService(examsLaboratoriesRepository);

    const { id: exam } = await examService.execute({ name: 'teste de exame', type: 'teste' });
    const { id: laboratory } = await laboratoryService.execute({ name: 'teste de laboratorio', address: 'Rua teste' });

    const { id } = await createExamsLaboratoriesService.execute({
      laboratory,
      exam,
    });

    const deleted = await examsLaboratoriesService.execute(id);

    expect(deleted).toBeTruthy();
  });
});
