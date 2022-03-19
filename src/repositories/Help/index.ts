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

  async findOne(id: string | number): Promise<HelpType.Values> {
    return await this.repository.findOne(id);
  }

  async create({
    title,
    description,
    category,
    file,
    owner,
    is_private,
    status,
  }: HelpType.Create): Promise<HelpType.Values> {
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

    return help;
  }

  // async update({ id, values }: UserType.Update): Promise<boolean> {
  //   const User = getRepository(Users);

  //   await User.update(id, values);

  //   return true;
  // }

  // async delete(id: number): Promise<boolean> {
  //   const User = getRepository(Users);

  //   await User.delete(id);

  //   return true;
  // }
}
