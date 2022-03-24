import { ExamRepository } from '@repositories';
import UpdateExamService from './UpdateExamService';
import UpdateExamController from './UpdateExamController';

export const updateExamController = (): UpdateExamController => {
  const examRepository = new ExamRepository();
  const examService = new UpdateExamService(examRepository);
  const examController = new UpdateExamController(examService);

  return examController;
};
