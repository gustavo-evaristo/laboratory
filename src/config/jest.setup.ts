import 'dotenv/config';
import Database from '@database';

beforeAll(async (): Promise<void> => {
  return Database.connect();
});
