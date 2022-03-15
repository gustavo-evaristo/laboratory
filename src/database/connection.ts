import { NODE_ENV } from '@utils';
import { Connection, createConnections, getConnection } from 'typeorm';

export const getDbConnection = async (): Promise<Connection> => {
  await createConnections();

  return getConnection(NODE_ENV);
};
