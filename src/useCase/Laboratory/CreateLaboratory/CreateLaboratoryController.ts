import { Request, Response } from 'express';
import LaboratoryService from './CreateLaboratoryService';
import { laboratoryForm } from '@utils';

export default class CreateLaboratoryController {
  constructor(private laboratoryService: LaboratoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await laboratoryForm('create', req.body);

    const { name, address }: LaboratoryType.Create = req.body;

    const laboratory = await this.laboratoryService.execute({ name, address });

    return res.status(200).json(laboratory);
  }
}
