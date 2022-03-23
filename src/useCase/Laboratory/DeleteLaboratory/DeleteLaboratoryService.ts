import { LaboratoryRepository } from '@repositories';

export default class DeleteLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  async execute(id: number): Promise<boolean> {
    const laboratoryExists = await this.laboratoryRepository.findOne(id);

    if (!laboratoryExists) throw new Error('Laboratory not exists');

    return await this.laboratoryRepository.delete(id);
  }
}
