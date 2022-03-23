import { Router } from 'express';
import { createExamController, createLaboratoryController } from '@useCase';

const routes = Router();

//Laboratories
routes.post('/laboratory/create', (req, res) => createLaboratoryController().handle(req, res));

//Exams
routes.post('/exam/create', (req, res) => createExamController().handle(req, res));

export default routes;
