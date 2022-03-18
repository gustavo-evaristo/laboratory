import 'dotenv/config';
import Database from '@database';

const database = new Database('TEST');

beforeAll(async (): Promise<void> => {
  return database.connect();
});

afterAll(async (): Promise<void> => {
  return await database.close();
});
