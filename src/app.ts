/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import Database from '@database';
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

  private database(): Promise<void> {
    return Database.connect();
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
