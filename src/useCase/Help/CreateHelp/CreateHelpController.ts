import { Request, Response } from 'express';
import HelpService from './CreateHelpService';

export default class GetHelpController {
  constructor(private helpService: HelpService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description, category, status, owner, file, is_private }: HelpType.Create = req.body;

    await this.helpService.execute({ title, description, category, status, owner, file, is_private });

    return res.status(200);
  }
}
