import { ExamRepository } from '@repositories';

export default class CreatExamService {
  constructor(private examRepository: ExamRepository) {}

  async execute({ name, type }: ExamType.Create): Promise<ExamType.Values> {
    return await this.examRepository.create({
      name,
      type,
    });
  }

  async executeInBatch(exams: ExamType.Create[]): Promise<boolean> {
    exams.map(async ({ name, type }) => {
      await this.examRepository.create({
        name,
        type,
      });
    });

    return true;
  }
}
