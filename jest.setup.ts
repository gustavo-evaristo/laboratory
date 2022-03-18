import 'dotenv/config';
import { getConnection, createConnections } from 'typeorm';

beforeAll(async () => {
  await createConnections();
  getConnection('TEST');
});

afterAll(async () => {
  getConnection('TEST').close();
});
