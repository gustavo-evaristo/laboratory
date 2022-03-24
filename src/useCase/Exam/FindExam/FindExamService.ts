import { ExamRepository } from '@repositories';

export default class CreatExamService {
  constructor(private examRepository: ExamRepository) {}

  async execute(): Promise<ExamType.Values[]> {
    return await this.examRepository.findAll();
  }
}
