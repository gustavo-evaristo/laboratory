import 'dotenv/config';
import { Connection, createConnection, getConnection } from 'typeorm';

const dbTestConnect = async (): Promise<Connection> => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'koob-help-test',
    synchronize: true,
    entities: ['./src/entities/**.ts'],
    migrations: ['./src/database/migrations/**.ts'],
    cli: {
      entitiesDir: './src/entities/',
      migrationsDir: './src/database/migrations/',
    },
  });

  return getConnection();
};

beforeAll(async () => {
  await dbTestConnect();
});

afterAll(async () => {
  getConnection().close();
});
