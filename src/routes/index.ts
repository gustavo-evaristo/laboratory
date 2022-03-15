import { Router } from 'express';
import { createUserController } from '@useCase';

const routes = Router();

//Users
routes.post('/user/create', (req, res) => createUserController().handle(req, res));

export default routes;
