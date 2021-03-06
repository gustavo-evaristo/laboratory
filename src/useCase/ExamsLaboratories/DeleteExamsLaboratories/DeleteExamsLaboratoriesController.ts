import { Request, Response } from 'express';
import ExamsLaboratoriesService from './DeleteExamsLaboratoriesService';
import { examsLaboratoriesForm } from '@utils';

export default class DeleteExamsLaboratoriesController {
  constructor(private examsLaboratoriesService: ExamsLaboratoriesService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await examsLaboratoriesForm('remove', req.body);

    const { id }: ExamsLaboratoriesType.Delete = req.body;

    const examsLaboratories = await this.examsLaboratoriesService.execute(id);

    return res.status(200).json(examsLaboratories);
  }

  async handleInBatch(req: Request, res: Response): Promise<Response> {
    await examsLaboratoriesForm('removeInBatch', req.body);

    const { examsLaboratories }: ExamsLaboratoriesType.DeleteInBatch = req.body;

    const examsLaboratoriesList = await this.examsLaboratoriesService.executeInBatch(examsLaboratories);

    return res.status(200).json(examsLaboratoriesList);
  }
}
