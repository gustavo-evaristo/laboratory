import { ExamsLaboratoriesRepository } from '@repositories';

export default class CreateExamLaboratoriesService {
  constructor(private examsLaboratories: ExamsLaboratoriesRepository) {}

  async execute({ laboratory, exam }: ExamsLaboratoriesType.Create): Promise<ExamsLaboratoriesType.Values> {
    return await this.examsLaboratories.create({
      laboratory,
      exam,
    });
  }
}
