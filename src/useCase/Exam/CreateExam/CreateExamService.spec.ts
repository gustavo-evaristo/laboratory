import { ExamRepository } from '@repositories';
import CreatExamService from './CreateExamService';

describe('Create exam service', () => {
  it('Should not be able to register exam', async () => {
    const examRepository = new ExamRepository();

    const examService = new CreatExamService(examRepository);

    const exam = await examService.execute({ name: 'Exame de Sangue', type: 'Analise clínica' });

    expect(exam).toHaveProperty('id');
  });
});
