import { Request, Response } from 'express';
import LaboratoryService from './FindLaboratoryService';

export default class FindLaboratoryController {
  constructor(private laboratoryService: LaboratoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const laboratories = await this.laboratoryService.execute();

    return res.status(200).json(laboratories);
  }
}
