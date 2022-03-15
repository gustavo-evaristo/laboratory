import { Request, Response } from 'express';
import AuthUserService from './AuthUserService';

export default class AuthControllerController {
  constructor(private authUserService: AuthUserService) {}

  async handle(req: Request, res: Response): Promise<Response<UserType.AuthResponse>> {
    const { email, password }: UserType.CreateRequest = req.body;

    const user = await this.authUserService.execute({ email, password });

    return res.status(200).json(user);
  }
}
