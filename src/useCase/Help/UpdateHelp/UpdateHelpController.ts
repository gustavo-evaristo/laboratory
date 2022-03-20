import { Request, Response } from 'express';
import HelpService from './UpdateHelpService';

export default class UpdateHelpController {
  constructor(private helpService: HelpService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, title, description, category, file, status, stars, is_private }: HelpType.Values = req.body;

    await this.helpService.execute({
      id,
      values: { title, description, category, file, status, stars, is_private },
    });

    return res.status(200);
  }
}
