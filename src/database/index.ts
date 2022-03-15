import { Connection, createConnections, getConnection } from 'typeorm';
import { NODE_ENV } from '@utils';

class Database {
  constructor() {
    this.connection();
  }

  private async createConnections(): Promise<Connection[]> {
    return await createConnections();
  }

  private async getConnection(connection: string): Promise<Connection> {
    return getConnection(connection);
  }

  private async connection(): Promise<void> {
    await this.createConnections();
    this.getConnection(NODE_ENV);
  }
}

export default new Database();
