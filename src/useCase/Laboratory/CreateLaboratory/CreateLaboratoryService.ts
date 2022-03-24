/* eslint-disable prefer-const */
import { LaboratoryRepository } from '@repositories';

export default class CreateLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  async execute({ name, address }: LaboratoryType.Create): Promise<LaboratoryType.Values> {
    const laboratory = await this.laboratoryRepository.create({
      name,
      address,
    });

    return laboratory;
  }

  async executeInBatch(laboratories: LaboratoryType.Create[]): Promise<void> {
    laboratories.map(async ({ name, address }) => {
      await this.laboratoryRepository.create({
        name,
        address,
      });
    });
  }
}
