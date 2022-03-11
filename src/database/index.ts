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

  public async connection(): Promise<boolean> {
    try {
      await this.createConnections();
      this.getConnection(NODE_ENV || 'DEV');
      console.log('database connect in', NODE_ENV);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default new Database();
