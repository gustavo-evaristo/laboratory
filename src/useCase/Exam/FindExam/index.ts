import { ExamRepository } from '@repositories';
import FindExamService from './FindExamService';
import FindExamController from './FindExamController';

export const findExamController = (): FindExamController => {
  const examRepository = new ExamRepository();
  const examService = new FindExamService(examRepository);
  const examController = new FindExamController(examService);

  return examController;
};
