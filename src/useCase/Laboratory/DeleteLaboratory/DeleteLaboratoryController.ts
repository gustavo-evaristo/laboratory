import { Request, Response } from 'express';
import LaboratoryService from './DeleteLaboratoryService';
import { laboratoryForm } from '@utils';

export default class DeleteLaboratoryController {
  constructor(private laboratoryService: LaboratoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await laboratoryForm('remove', req.body);

    const { id }: LaboratoryType.Delete = req.body;

    await this.laboratoryService.execute(id);

    return res.status(200).json({ message: 'Laboratory deleted successfully' });
  }

  async handleInBatch(req: Request, res: Response): Promise<Response> {
    await laboratoryForm('removeInBatch', req.body);

    const { laboratories }: LaboratoryType.DeleteInBatch = req.body;

    await this.laboratoryService.executeInBatch(laboratories);

    return res.status(200).json({ message: 'Laboratories deleteds successfully' });
  }
}
