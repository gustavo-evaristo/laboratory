import 'dotenv/config';
import Database from '@database';
import { NODE_ENV } from '@utils';

const database = new Database(NODE_ENV);

beforeAll(async (): Promise<void> => {
  return database.connect();
});

afterAll(async (): Promise<void> => {
  return await database.close();
});
