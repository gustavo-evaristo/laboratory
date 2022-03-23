import 'dotenv/config';
import Database from '@database';

beforeAll(async (): Promise<void> => {
  return Database.connect();
});

afterAll(async (): Promise<void> => {
  return await Database.close();
});
