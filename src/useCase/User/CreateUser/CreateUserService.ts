import { UserRepository } from '@repositories';
import { isValidPassword } from '@utils';

export default class CreateUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ name, email, password, confirm_password }: UserType.CreateRequest): Promise<UserType.Values> {
    if (!isValidPassword(password, confirm_password)) throw new Error('');

    const user = await this.userRepository.create({ name, email, password });

    return user;
  }
}
