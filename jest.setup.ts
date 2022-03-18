import 'dotenv/config';
import { beforeAll } from '@jest/globals';
import { dbTestConnect, dbClose } from './src/database';

beforeAll(async () => {
  await dbTestConnect();
});

afterAll(async () => {
  await dbClose();
});
