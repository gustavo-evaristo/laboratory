import { getConnection, Repository } from 'typeorm';
import { Users } from '@entities';
import { NODE_ENV } from '@utils';

export default class UserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getConnection(NODE_ENV).getRepository(Users);
  }

  async findOne({ id, email }: UserType.Find): Promise<Users> {
    if (id) {
      return await this.repository.findOne({ id, active: true });
    }

    return await this.repository.findOne({ email, active: true });
  }

  async create({ name, email, avatar, password }: UserType.Create): Promise<UserType.Values> {
    const user = this.repository.create({
      name,
      email,
      avatar,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  async update({ id, values }: UserType.Update): Promise<boolean> {
    return !!(await this.repository.update(id, { ...values })).affected;
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.repository.delete(id)).affected;
  }
}
