import { ExamRepository } from '@repositories';

export default class CreatExamService {
  constructor(private examRepository: ExamRepository) {}

  async execute({ name, type }: ExamType.Create): Promise<ExamType.Values> {
    return await this.examRepository.create({
      name,
      type,
    });
  }
}
