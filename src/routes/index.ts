import { Router } from 'express';
import { createUserController, authUserController, getHelpController, createHelpController } from '@useCase';

const routes = Router();

//Users
routes.post('/user/create', (req, res) => createUserController().handle(req, res));
routes.post('/user/auth', (req, res) => authUserController().handle(req, res));

//Helps
routes.post('/help/create', (req, res) => createHelpController().handle(req, res));
routes.get('/help/:id', (req, res) => getHelpController().handle(req, res));

export default routes;
