import { Request, Response } from 'express';
import ExamService from './CreateExamService';
import { examForm } from '@utils';

export default class CreateExamController {
  constructor(private examService: ExamService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await examForm('create', req.body);

    const { name, type }: ExamType.Create = req.body;

    const exam = await this.examService.execute({ name, type });

    return res.status(200).json(exam);
  }

  async handleInBatch(req: Request, res: Response): Promise<Response> {
    await examForm('createInBatch', req.body);

    const { exams }: ExamType.CreateInBatch = req.body;

    await this.examService.executeInBatch(exams);

    return res.status(200).json({ message: 'successfully created exams' });
  }
}
