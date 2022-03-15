import { Request, Response } from 'express';
import UserService from './CreateUserService';

export default class CreateUserController {
  constructor(private userService: UserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, avatar, password, confirm_password }: UserType.CreateRequest = req.body;

    const user = await this.userService.execute({ name, email, avatar, password, confirm_password });

    return res.status(200).json(user);
  }
}
