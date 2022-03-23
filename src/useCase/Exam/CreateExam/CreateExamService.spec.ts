import { ExamRepository } from '@repositories';
import CreatExamService from './CreateExamService';

describe('Create exam service', () => {
  it('Should not be able to register exam', () => {
    const examRepository = new ExamRepository();
    const examService = new CreatExamService(examRepository);

    const exam = examService.execute({ name: 'Exame de Sangue', type: 'Analise clínica' });

    console.log(exam);

    expect(exam).toHaveProperty('id');
  });
});
