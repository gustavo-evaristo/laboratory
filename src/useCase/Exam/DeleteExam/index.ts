import { ExamRepository } from '@repositories';
import DeleteExamService from './DeleteExamService';
import DeleteExamController from './DeleteExamController';

export const deleteExamController = (): DeleteExamController => {
  const examRepository = new ExamRepository();
  const examService = new DeleteExamService(examRepository);
  const examController = new DeleteExamController(examService);

  return examController;
};
