import request from 'supertest';
import app from '@app';
import { ExamsLaboratoriesRepository, ExamRepository, LaboratoryRepository } from '@repositories';
import CreatExamsLaboratoriesService from './CreateExamsLaboratoriesService';
import CreateExamService from '../../Exam/CreateExam/CreateExamService';
import CreateLaboratoryService from '../../Laboratory/CreateLaboratory/CreateLaboratoryService';

describe('Create exams laboratories test', () => {
  it('Should not be able to register exams laboratories because fields are invalid', async () => {
    const response = await request(app).post('/exams-laboratories/create');

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid fields');
  });

  it('Should not be able to register exams laboratories because exam not exist', async () => {
    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
    const laboratoryRepository = new LaboratoryRepository();

    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);
    const examsLaboratoriesService = new CreatExamsLaboratoriesService(examsLaboratoriesRepository);

    const { id: laboratory } = await laboratoryService.execute({ name: 'teste de laboratorio', address: 'Rua teste' });

    expect(async () => await examsLaboratoriesService.execute({ laboratory, exam: 500 })).rejects.toThrow(
      new Error('Exam not exists'),
    );
  });

  it('Should not be able to register exams laboratories because laboratory not exist', async () => {
    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
    const examRepository = new ExamRepository();

    const examService = new CreateExamService(examRepository);
    const examsLaboratoriesService = new CreatExamsLaboratoriesService(examsLaboratoriesRepository);

    const { id: exam } = await examService.execute({ name: 'teste de exame', type: 'teste' });

    expect(async () => await examsLaboratoriesService.execute({ laboratory: 500, exam })).rejects.toThrow(
      new Error('Laboratory not exists'),
    );
  });

  it('Should be able to register exam', async () => {
    const examsLaboratoriesRepository = new ExamsLaboratoriesRepository();
    const examRepository = new ExamRepository();
    const laboratoryRepository = new LaboratoryRepository();

    const examService = new CreateExamService(examRepository);
    const laboratoryService = new CreateLaboratoryService(laboratoryRepository);
    const examsLaboratoriesService = new CreatExamsLaboratoriesService(examsLaboratoriesRepository);

    const { id: exam } = await examService.execute({ name: 'teste de exame', type: 'teste' });
    const { id: laboratory } = await laboratoryService.execute({ name: 'teste de laboratorio', address: 'Rua teste' });

    const examsLaboratories = await examsLaboratoriesService.execute({ laboratory, exam });

    expect(examsLaboratories).toHaveProperty('id');
  });
});
