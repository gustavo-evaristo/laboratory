import { ExamsLaboratoriesRepository, ExamRepository, LaboratoryRepository } from '@repositories';

export default class CreateExamLaboratoriesService {
  constructor(private examsLaboratories: ExamsLaboratoriesRepository) {}

  async execute({ laboratory, exam }: ExamsLaboratoriesType.Create): Promise<ExamsLaboratoriesType.Values> {
    const examRepository = new ExamRepository();
    const laboratoryRepository = new LaboratoryRepository();

    const examAlreadyExists = await examRepository.find(exam);

    if (!examAlreadyExists) throw new Error('Exam not exists');

    const laboratoryAlreadyExists = await laboratoryRepository.find(laboratory);

    if (!laboratoryAlreadyExists) throw new Error('Laboratory not exists');

    return await this.examsLaboratories.create({
      laboratory,
      exam,
    });
  }
}
