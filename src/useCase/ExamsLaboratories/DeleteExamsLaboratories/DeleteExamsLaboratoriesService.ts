import { ExamsLaboratoriesRepository } from '@repositories';

export default class DeleteExamsLaboratoriesService {
  constructor(private examsLaboratories: ExamsLaboratoriesRepository) {}

  async execute(id: number): Promise<boolean> {
    const examsLaboratoriesAlreadyExists = await this.examsLaboratories.find(id);

    if (!examsLaboratoriesAlreadyExists) throw new Error('Exams laboratories not exists');

    return await this.examsLaboratories.delete(id);
  }

  async executeInBatch(examsLaboratories: number[]): Promise<boolean> {
    examsLaboratories.map(async (id) => {
      const examsLaboratoriesAlreadyExists = !!(await this.examsLaboratories.find(id));

      if (examsLaboratoriesAlreadyExists) {
        return await this.examsLaboratories.delete(id);
      }
    });

    return true;
  }
}
