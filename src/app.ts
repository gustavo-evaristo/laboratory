import 'dotenv/config';
import 'reflect-metadata';
import '@database';
import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

export default app;
