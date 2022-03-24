import { Request, Response } from 'express';
import ExamService from './UpdateExamService';
import { examForm } from '@utils';

export default class UpdateExamController {
  constructor(private examService: ExamService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await examForm('update', req.body);

    const { id, values }: ExamType.Update = req.body;

    await this.examService.execute({ id, values });

    return res.status(200).json({ message: 'Exam updated successfully' });
  }

  async handleInBatch(req: Request, res: Response): Promise<Response> {
    await examForm('updateInBatch', req.body);

    const { exams }: ExamType.UpdateInBatch = req.body;

    await this.examService.executeInBatch(exams);

    return res.status(200).json({ message: 'Exam updated successfully' });
  }
}
