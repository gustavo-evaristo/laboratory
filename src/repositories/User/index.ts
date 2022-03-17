import { getRepository } from 'typeorm';
import { Users } from '@entities';
import { isEmpty } from '@utils';

export default class UserRepository {
  async findOne({ id, email }: UserType.Find): Promise<Users | null> {
    const User = getRepository(Users);

    if (!isEmpty(id)) {
      return await User.findOne({ id, active: true });
    }

    if (!isEmpty(email)) {
      return await User.findOne({ email, active: true });
    }

    return null;
  }

  async create({ name, email, avatar, password }: UserType.Create): Promise<UserType.Values> {
    const User = getRepository(Users);

    const user = User.create({
      name,
      email,
      avatar,
      password,
    });

    await User.save(user);

    return user;
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
