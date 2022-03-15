import { UserRepository } from '@repositories';
import { decryptPassword, generateToken, isEmpty } from '@utils';

export default class AuthUserService {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: UserType.Auth): Promise<UserType.AuthResponse> {
    const user = await this.userRepository.findOne({ email });

    if (isEmpty(user)) throw new Error('Invalid email or password');

    if (!decryptPassword(password, user.password)) throw new Error('Invalid email or password');

    return { user, token: generateToken(user.id) };
  }
}
