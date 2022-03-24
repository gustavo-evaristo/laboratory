import { Request, Response } from 'express';
import ExamService from './DeleteExamService';
import { examForm } from '@utils';

export default class DeleteExamController {
  constructor(private examService: ExamService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    await examForm('remove', req.body);

    const { id }: ExamType.Delete = req.body;

    await this.examService.execute(id);

    return res.status(200).json({ message: 'Exam deleted successfully' });
  }
}
