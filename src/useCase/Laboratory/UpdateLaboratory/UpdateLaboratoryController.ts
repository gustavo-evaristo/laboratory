import { Request, Response } from 'express';
import LaboratoryService from './UpdateLaboratoryService';
import { laboratoryForm } from '@utils';

export default class UpdateLaboratoryController {
  constructor(private laboratoryService: LaboratoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await laboratoryForm('update', req.body);

    const { id, values }: LaboratoryType.Update = req.body;

    await this.laboratoryService.execute({ id, values });

    return res.status(200).json({ message: 'Laboratory updated successfully' });
  }

  async handleInBatch(req: Request, res: Response): Promise<Response> {
    await laboratoryForm('updateInBatch', req.body);

    const { laboratories }: LaboratoryType.UpdateInBatch = req.body;

    await this.laboratoryService.executeInBatch(laboratories);

    return res.status(200).json({ message: 'Laboratory updated successfully' });
  }
}
