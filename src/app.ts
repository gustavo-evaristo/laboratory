import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import createConnection from '@database';
import routes from '@routes';

class App {
  public express: Application;

  constructor() {
    this.express = express();

    this.database();

    this.middlewares();

    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    createConnection();
  }

  private routes(): void {
    this.express.use(routes);

    this.express.use((err: Error, req: Request, res: Response) => {
      if (err instanceof Error) {
        return res.status(406).json({
          error: err.message,
        });
      }

      return res.status(500).json({
        error: `Internal server error - ${err}`,
      });
    });
  }
}

export default new App().express;
