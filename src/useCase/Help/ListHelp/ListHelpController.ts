import { Request, Response } from 'express';
import HelpService from './ListHelpService';

export default class ListHelpController {
  constructor(private helpService: HelpService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const helps = await this.helpService.execute();

    return res.status(200).json(helps);
  }
}
