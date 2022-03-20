import { Request, Response } from 'express';
import HelpService from './DeleteHelpService';

export default class DeleteHelpController {
  constructor(private helpService: HelpService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id }: HelpType.Delete = req.body;

    await this.helpService.execute(id);

    return res.status(200);
  }
}
