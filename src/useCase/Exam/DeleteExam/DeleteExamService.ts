import { ExamRepository } from '@repositories';

export default class CreatExamService {
  constructor(private examRepository: ExamRepository) {}

  async execute(id: number): Promise<boolean> {
    const examExists = await this.examRepository.find(id);

    if (!examExists) throw new Error('Exam not exists');

    return await this.examRepository.delete(id);
  }

  async executeInBatch(exams: number[]): Promise<boolean> {
    exams.map(async (exam) => {
      const examExists = !!(await this.examRepository.find(exam));

      if (examExists) {
        return await this.examRepository.delete(exam);
      }
    });

    return true;
  }
}
