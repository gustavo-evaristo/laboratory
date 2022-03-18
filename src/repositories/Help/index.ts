import { getConnection } from 'typeorm';
import { Helps } from '@entities';
import { NODE_ENV } from '@utils';

export default class HelpRepository {
  async findAll(): Promise<HelpType.Values[]> {
    const Help = getConnection(NODE_ENV).getRepository(Helps);

    return await Help.find();
  }

  async findOne(id: number): Promise<HelpType.Values> {
    const Help = getConnection(NODE_ENV).getRepository(Helps);

    return await Help.findOne({ id });
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
    const Help = getConnection(NODE_ENV).getRepository(Helps);

    const help = Help.create({
      title,
      description,
      category,
      file,
      owner,
      is_private,
      status,
    });

    await Help.save(help);

    return help;
  }

  // async update({ id, values }: UserType.Update): Promise<boolean> {
  //   const User = getConnection(NODE_ENV).getRepository(Users);

  //   await User.update(id, values);

  //   return true;
  // }

  // async delete(id: number): Promise<boolean> {
  //   const User = getConnection(NODE_ENV).getRepository(Users);

  //   await User.delete(id);

  //   return true;
  // }
}
