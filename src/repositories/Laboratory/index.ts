import { getRepository, Repository } from 'typeorm';
import { Laboratory } from '@entities';

export default class LaboratoryRepository {
  private repository: Repository<Laboratory>;

  constructor() {
    this.repository = getRepository(Laboratory);
  }

  async findOne(id: number): Promise<LaboratoryType.Values> {
    return await this.repository.findOne({ id, status: 'ACTIVE' });
  }

  async findAll(): Promise<LaboratoryType.Values[]> {
    return await this.repository.find({ status: 'ACTIVE' });
  }

  async create({ name, address }: LaboratoryType.Create): Promise<LaboratoryType.Values> {
    const laboratory = this.repository.create({
      name,
      address,
    });

    await this.repository.save(laboratory);

    return laboratory;
  }

  async update({ id, values }: LaboratoryType.Update): Promise<boolean> {
    return !!(await this.repository.update(id, { ...values })).affected;
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.repository.delete(id)).affected;
  }
}
