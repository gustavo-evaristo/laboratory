import { Connection, createConnection, getConnection } from 'typeorm';

export const getTestDbConnection = async (): Promise<Connection> => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'koob-help-test',
    synchronize: true,
    dropSchema: true,
    entities: ['./src/entities/**.ts'],
    migrations: ['./src/database/migrations/**.ts'],
    cli: {
      entitiesDir: './src/entities/',
      migrationsDir: './src/database/migrations/',
    },
  });

  return getConnection();
};

export const closeTestDbConnection = async (): Promise<void> => {
  await getConnection().close();
};
