import { NODE_ENV } from '@utils';
import { Connection, createConnection, getConnectionOptions, getConnection } from 'typeorm';

export const dbConnect = async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const connection = await createConnection(
    Object.assign(defaultOptions, {
      database: NODE_ENV === 'TEST' ? 'koob-help-test' : NODE_ENV === 'DEV' ? 'koob-help-dev' : 'koob-help-hml',
      dropSchema: NODE_ENV === 'TEST',
    }),
  );

  console.log('database connected in', NODE_ENV, connection.options.database);

  return connection;
};

export const dbClose = async (): Promise<void> => {
  const connection = getConnection();

  console.log('close database', connection.options.database);

  await connection.close();
};
