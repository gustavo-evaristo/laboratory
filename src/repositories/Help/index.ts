import { getRepository } from 'typeorm';
import { Helps } from '@entities';

export default class HelpRepository {
  async findAll(): Promise<HelpType.Values[]> {
    const Help = getRepository(Helps);

    return await Help.find();
  }

  async findOne(id: number): Promise<HelpType.Values> {
    const Help = getRepository(Helps);

    return await Help.findOne({ id });
  }

  // async create({ name, email, avatar, password }: UserType.Create): Promise<UserType.Values> {
  //   const User = getRepository(Users);

  //   const user = User.create({
  //     name,
  //     email,
  //     avatar,
  //     password,
  //   });

  //   await User.save(user);

  //   return user;
  // }

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
