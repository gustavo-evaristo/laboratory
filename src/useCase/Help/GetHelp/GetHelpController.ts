import { Request, Response } from 'express';
import HelpService from './GetHelpService';

export default class GetHelpController {
  constructor(private helpService: HelpService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const help = await this.helpService.execute(Number(id));

    return res.status(200).json(help);
  }
}
