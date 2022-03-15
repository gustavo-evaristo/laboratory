import { Router } from 'express';
import { createUserController, authUserController } from '@useCase';

const routes = Router();

//Users
routes.post('/user/create', (req, res) => createUserController().handle(req, res));
routes.post('/user/auth', (req, res) => authUserController().handle(req, res));

export default routes;
