import { Connection, getConnection, createConnections } from 'typeorm';
import { NODE_ENV } from '@utils';

export const createConnection = async (): Promise<Connection> => {
  await createConnections();

  return getConnection(NODE_ENV);
};

export const createTestConnection = async (): Promise<Connection> => {
  await createConnections();

  return getConnection('TEST');
};
