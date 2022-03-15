import { UserRepository } from '@repositories';
import { isValidPassword } from '@utils';
import { Users } from '@entities';

export default class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, avatar, password, confirm_password }: UserType.CreateRequest): Promise<Users> {
    if (!isValidPassword(password, confirm_password)) throw new Error('Invalid Password');

    if (await this.userRepository.findOne({ email })) throw new Error('User already exists');

    const user = await this.userRepository.create({ name, email, avatar, password });

    return user;
  }
}
