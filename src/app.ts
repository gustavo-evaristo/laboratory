import 'dotenv/config';
import 'reflect-metadata';
import '@database';
import express, { Application, Request, Response } from 'express';
import routes from './routes';

class App {
  express: Application;

  constructor() {
    this.express = express();

    this.routes();
  }

  private routes(): void {
    this.express.use(routes);

    this.express.use((err: Error, request: Request, response: Response) => {
      if (err instanceof Error) {
        return response.status(406).json({
          error: err.message,
        });
      }
      return response.status(500).json({
        error: `Internal server error - ${err}`,
      });
    });
  }
}

export default new App().express;
