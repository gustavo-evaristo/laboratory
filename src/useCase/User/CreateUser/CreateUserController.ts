import { Request, Response } from 'express';
import UserService from './CreateUserService';

export default class CreateUserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, confirm_password }: UserType.CreateRequest = req.body;

    const user = await this.userService.execute({ name, email, password, confirm_password });

    return res.status(200).json(user);
  }
}
