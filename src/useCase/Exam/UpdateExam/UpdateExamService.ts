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
}
