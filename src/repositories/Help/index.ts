import { getConnection, Repository } from 'typeorm';
import { Helps } from '@entities';
import { NODE_ENV } from '@utils';

export default class HelpRepository {
  private repository: Repository<Helps>;

  constructor() {
    this.repository = getConnection(NODE_ENV).getRepository(Helps);
  }

  async findAll(): Promise<HelpType.Values[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<HelpType.Values> {
    return await this.repository.findOne(id);
  }

  async create({ title, description, category, file, owner, is_private, status }: HelpType.Create): Promise<boolean> {
    const help = this.repository.create({
      title,
      description,
      category,
      file,
      owner,
      is_private,
      status,
    });

    await this.repository.save(help);

    return true;
  }

  async update({ id, values }: HelpType.Update): Promise<boolean> {
    return !!(await this.repository.update(id, { ...values })).affected;
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.repository.delete(id)).affected;
  }
}
