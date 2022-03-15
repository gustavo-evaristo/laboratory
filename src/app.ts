import 'dotenv/config';
import 'reflect-metadata';
import '@database';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  express: Application;

  constructor() {
    this.express = express();

    this.routes();

    this.middlewares();
  }

  private middlewares(): void {
    this.express.use(cors());
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
