import { Users } from '@models';
import { getRepository } from 'typeorm';
import { isEmpty, isValidPassword } from '@utils';

class UserService {
  public async find({ id, email }: UserType.Find): Promise<Users | false> {
    if (isEmpty(id) && isEmpty(email)) return false;

    const UserRepository = getRepository(Users);

    if (!isEmpty(id)) {
      const user = await UserRepository.findOne({ id, active: true });

      return user || false;
    }

    if (!isEmpty(email)) {
      const user = await UserRepository.findOne({ email, active: true });

      return user || false;
    }
  }

  public async create({ name, email, password, confirm_password }: UserType.Create): Promise<Users | string> {
    const User = getRepository(Users);

    const userAlreadyExists = await this.find({ email });

    if (userAlreadyExists) return 'User Already Exists';

    if (!isValidPassword(password, confirm_password)) return 'Invalid Password';

    const user = User.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default new UserService();
