import 'dotenv/config';
import { dbTestConnect, dbClose } from './src/database';

beforeAll(async () => {
  await dbTestConnect();
});

afterAll(async () => {
  await dbClose();
});
