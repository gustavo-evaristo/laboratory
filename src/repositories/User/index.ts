import { getRepository, Repository } from 'typeorm';
import { Users } from '@entities';
import { isEmpty } from '@utils';

export default class UserRepository {
  repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async find({ id, email }: UserType.Find): Promise<UserType.Values | null> {
    if (!isEmpty(id)) {
      const user = await this.repository.findOne({ id, active: true });

      return user;
    }

    if (!isEmpty(email)) {
      const user = await this.repository.findOne({ email, active: true });

      return user;
    }

    return null;
  }

  async create({ name, email, password }: UserType.Create): Promise<Users> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  async update({ id, values }: UserType.Update): Promise<boolean> {
    await this.repository.update(id, values);

    return true;
  }

  async delete(id: number): Promise<boolean> {
    await this.repository.delete(id);

    return true;
  }
}
