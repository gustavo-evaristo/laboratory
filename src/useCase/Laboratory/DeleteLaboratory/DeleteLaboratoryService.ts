import { LaboratoryRepository } from '@repositories';

export default class DeleteLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  async execute(id: number): Promise<boolean> {
    const laboratoryExists = await this.laboratoryRepository.find(id);

    if (!laboratoryExists) throw new Error('Laboratory not exists');

    return await this.laboratoryRepository.delete(id);
  }

  async executeInBatch(laboratories: number[]): Promise<boolean> {
    laboratories.map(async (laboratory) => {
      const laboratoryExists = !!(await this.laboratoryRepository.find(laboratory));

      if (laboratoryExists) {
        return await this.laboratoryRepository.delete(laboratory);
      }
    });

    return true;
  }
}
