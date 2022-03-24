import { ExamsLaboratoriesRepository } from '@repositories';

export default class FindExamsLaboratoriesService {
  constructor(private examsLaboratories: ExamsLaboratoriesRepository) {}

  async execute(): Promise<ExamsLaboratoriesType.Values[]> {
    return await this.examsLaboratories.findAll();
  }

  async executeByName(name: string): Promise<ExamsLaboratoriesType.Values[]> {
    return await this.examsLaboratories.findByName(name);
  }
}
