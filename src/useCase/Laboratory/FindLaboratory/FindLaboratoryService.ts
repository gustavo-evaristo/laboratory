import { LaboratoryRepository } from '@repositories';

export default class FindLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  async execute(): Promise<LaboratoryType.Values[]> {
    return await this.laboratoryRepository.findAll();
  }
}
