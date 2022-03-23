import { LaboratoryRepository } from '@repositories';

export default class CreateLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  async execute({ name, address }: LaboratoryType.Create): Promise<LaboratoryType.Values> {
    const laboratory = await this.laboratoryRepository.create({
      name,
      address,
    });

    if (!laboratory) throw new Error('Error when registering laboratory');

    return laboratory;
  }
}
