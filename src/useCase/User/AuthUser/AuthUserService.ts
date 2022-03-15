import { UserRepository } from '@repositories';
import { decryptPassword, isEmpty } from '@utils';
import { Users } from '@entities';

export default class AuthUserService {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: UserType.Auth): Promise<Users> {
    const userExists = await this.userRepository.findOne({ email });

    if (isEmpty(userExists)) throw new Error('Invalid email or password');

    if (!decryptPassword(password, userExists.password)) throw new Error('Invalid email or password');

    return userExists;
  }
}
