import { getConnection, Repository } from 'typeorm';
import { Laboratory } from '@entities';
import { NODE_ENV } from '@utils';

export default class LaboratoryRepository {
  private repository: Repository<Laboratory>;

  constructor() {
    this.repository = getConnection(NODE_ENV).getRepository(Laboratory);
  }

  async find(): Promise<LaboratoryType.Values[]> {
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
