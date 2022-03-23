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
}
