import { NODE_ENV } from '@utils';
import { Connection, createConnections, createConnection, getConnection } from 'typeorm';

export const dbConnect = async (): Promise<Connection> => {
  await createConnections();

  const connection = getConnection(NODE_ENV);

  const {
    options: { database },
  } = connection;

  console.log('database connected in', NODE_ENV, database);

  return connection;
};

export const dbTestConnect = async (): Promise<Connection> => {
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

  const connection = getConnection();

  const {
    options: { database },
  } = connection;

  console.log('database connected in', NODE_ENV, database);

  return connection;
};

export const dbClose = async (): Promise<void> => {
  return await getConnection().close();
};
