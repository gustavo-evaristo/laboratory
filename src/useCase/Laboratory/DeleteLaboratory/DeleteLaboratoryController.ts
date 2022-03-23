import { Request, Response } from 'express';
import LaboratoryService from './DeleteLaboratoryService';
import { laboratoryForm } from '@utils';

export default class DeleteLaboratoryController {
  constructor(private laboratoryService: LaboratoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await laboratoryForm('remove', req.body);

    const { id }: LaboratoryType.Delete = req.body;

    await this.laboratoryService.execute(id);

    return res.status(200).json({ message: 'ok' });
  }
}
