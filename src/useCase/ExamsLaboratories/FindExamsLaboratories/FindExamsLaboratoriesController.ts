import { Request, Response } from 'express';
import ExamsLaboratoriesService from './FindExamsLaboratoriesService';

export default class FindExamLaboratoriesController {
  constructor(private examsLaboratoriesService: ExamsLaboratoriesService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const examsLaboratories = await this.examsLaboratoriesService.execute();

    return res.status(200).json(examsLaboratories);
  }
}
