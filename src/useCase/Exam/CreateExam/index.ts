import { ExamRepository } from '@repositories';
import CreateExamService from './CreateExamService';
import CreateExamController from './CreateExamController';

export const createExamController = (): CreateExamController => {
  const examRepository = new ExamRepository();
  const examService = new CreateExamService(examRepository);
  const examController = new CreateExamController(examService);

  return examController;
};
