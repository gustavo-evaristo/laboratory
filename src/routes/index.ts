import { Router } from 'express';
import {
  createExamController,
  createLaboratoryController,
  createExamsLaboratoriesController,
  findLaboratoryController,
  updateLaboratoryController,
  deleteLaboratoryController,
  findExamController,
  updateExamController,
  deleteExamController,
  findExamsLaboratoriesController,
  deleteExamsLaboratoriesController,
} from '@useCase';

const routes = Router();

//Laboratories
routes.get('/laboratory/list', (req, res) => findLaboratoryController().handle(req, res));
routes.post('/laboratory/create', (req, res) => createLaboratoryController().handle(req, res));
routes.post('/laboratory/create-in-batch', (req, res) => createLaboratoryController().handleInBatch(req, res));
routes.put('/laboratory/update', (req, res) => updateLaboratoryController().handle(req, res));
routes.put('/laboratory/update-in-batch', (req, res) => updateLaboratoryController().handleInBatch(req, res));
routes.delete('/laboratory/delete', (req, res) => deleteLaboratoryController().handle(req, res));
routes.delete('/laboratory/delete-in-batch', (req, res) => deleteLaboratoryController().handleInBatch(req, res));

//Exams
routes.get('/exam/list', (req, res) => findExamController().handle(req, res));
routes.post('/exam/search', (req, res) => findExamsLaboratoriesController().handleByName(req, res));
routes.post('/exam/create', (req, res) => createExamController().handle(req, res));
routes.post('/exam/create-in-batch', (req, res) => createExamController().handleInBatch(req, res));
routes.put('/exam/update', (req, res) => updateExamController().handle(req, res));
routes.put('/exam/update-in-batch', (req, res) => updateExamController().handleInBatch(req, res));
routes.delete('/exam/delete', (req, res) => deleteExamController().handle(req, res));
routes.delete('/exam/delete-in-batch', (req, res) => deleteExamController().handleInBatch(req, res));

//Exams Laboratories
routes.get('/exams-laboratories/list', (req, res) => findExamsLaboratoriesController().handle(req, res));
routes.post('/exams-laboratories/create', (req, res) => createExamsLaboratoriesController().handle(req, res));
routes.post('/exams-laboratories/create-in-batch', (req, res) =>
  createExamsLaboratoriesController().handleInBatch(req, res),
);
routes.delete('/exams-laboratories/delete', (req, res) => deleteExamsLaboratoriesController().handle(req, res));
routes.delete('/exams-laboratories/delete-in-batch', (req, res) =>
  deleteExamsLaboratoriesController().handleInBatch(req, res),
);

export default routes;
