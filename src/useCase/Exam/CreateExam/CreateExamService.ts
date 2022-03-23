import { ExamRepository } from '@repositories';

export default class CreatExamService {
  constructor(private examRepository: ExamRepository) {}

  async execute({ name, type }: ExamType.Create): Promise<ExamType.Values> {
    const exam = await this.examRepository.create({
      name,
      type,
    });

    if (!exam) throw new Error('Error when registering exam');

    return exam;
  }
}
