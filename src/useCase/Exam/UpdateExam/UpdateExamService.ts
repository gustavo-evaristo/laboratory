import { ExamRepository } from '@repositories';

export default class CreatExamService {
  constructor(private examRepository: ExamRepository) {}

  async execute({ id, values }: ExamType.Update): Promise<boolean> {
    const examAlreadyExists = await this.examRepository.find(id);

    if (!examAlreadyExists) throw new Error('Exam not exists');

    return await this.examRepository.update({
      id,
      values,
    });
  }

  async executeInBatch(exams: ExamType.Update[]): Promise<boolean> {
    exams.map(async ({ id, values }) => {
      const examAlreadyExists = !!(await this.examRepository.find(id));

      if (examAlreadyExists) {
        return await this.examRepository.update({
          id,
          values,
        });
      }
    });

    return true;
  }
}
