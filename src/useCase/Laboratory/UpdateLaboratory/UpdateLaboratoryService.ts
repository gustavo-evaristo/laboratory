import { LaboratoryRepository } from '@repositories';

export default class UpdateLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  async execute({ id, values }: LaboratoryType.Update): Promise<boolean> {
    const laboratoryExists = await this.laboratoryRepository.find(id);

    if (!laboratoryExists) throw new Error('Laboratory not exists');

    return await this.laboratoryRepository.update({
      id,
      values,
    });
  }

  async executeInBatch(laboratories: LaboratoryType.Update[]): Promise<boolean> {
    laboratories.map(async ({ id, values }) => {
      const laboratoryExists = !!(await this.laboratoryRepository.find(id));

      if (laboratoryExists) {
        return await this.laboratoryRepository.update({
          id,
          values,
        });
      }
    });

    return true;
  }
}
