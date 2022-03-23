import { Request, Response } from 'express';
import ExamsLaboratoriesService from './CreateExamsLaboratoriesService';
import { examsLaboratoriesForm } from '@utils';

export default class CreateExamLaboratoriesController {
  constructor(private examsLaboratoriesService: ExamsLaboratoriesService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await examsLaboratoriesForm('create', req.body);

    const { laboratory, exam }: ExamsLaboratoriesType.Create = req.body;

    const examsLaboratories = await this.examsLaboratoriesService.execute({ laboratory, exam });

    return res.status(200).json(examsLaboratories);
  }
}
