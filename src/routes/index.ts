import { Router } from 'express';
import {
  createUserController,
  authUserController,
  getHelpController,
  createHelpController,
  listHelpController,
  updateHelpController,
  deleteHelpController,
} from '@useCase';

const routes = Router();

//Users
routes.post('/user/create', (req, res) => createUserController().handle(req, res));
routes.post('/user/auth', (req, res) => authUserController().handle(req, res));

//Helps
routes.post('/help/create', (req, res) => createHelpController().handle(req, res));
routes.get('/help/:id', (req, res) => getHelpController().handle(req, res));
routes.get('/help/list', (req, res) => listHelpController().handle(req, res));
routes.put('/help/update', (req, res) => updateHelpController().handle(req, res));
routes.delete('/help/delete', (req, res) => deleteHelpController().handle(req, res));

export default routes;
