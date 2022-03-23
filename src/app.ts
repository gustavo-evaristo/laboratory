/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import Database from '@database';
import routes from '@routes';
import { NODE_ENV } from '@utils';

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

  private database(): Promise<void> {
    if (NODE_ENV !== 'TEST') {
      const database = new Database(NODE_ENV);
      return database.connect();
    }
  }

  private routes(): void {
    this.express.use(routes);

    this.express.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof Error) {
        return res.status(400).json({
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
