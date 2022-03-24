import { Request, Response } from 'express';
import ExamService from './FindExamService';

export default class FindExamController {
  constructor(private examService: ExamService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const exam = await this.examService.execute();

    return res.status(200).json(exam);
  }
}
