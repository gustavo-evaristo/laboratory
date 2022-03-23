import { Router } from 'express';
import {
  createExamController,
  createLaboratoryController,
  createExamsLaboratoriesController,
  findLaboratoryController,
  updateLaboratoryController,
  deleteLaboratoryController,
} from '@useCase';

const routes = Router();

//Laboratories
routes.post('/laboratory/create', (req, res) => createLaboratoryController().handle(req, res));
routes.get('/laboratory/list', (req, res) => findLaboratoryController().handle(req, res));
routes.put('/laboratory/update', (req, res) => updateLaboratoryController().handle(req, res));
routes.delete('/laboratory/delete', (req, res) => deleteLaboratoryController().handle(req, res));

//Exams
routes.post('/exam/create', (req, res) => createExamController().handle(req, res));

//Exams Laboratories
routes.post('/exams-laboratories/create', (req, res) => createExamsLaboratoriesController().handle(req, res));

export default routes;
