import { Connection, createConnections, getConnection } from 'typeorm';

export default class Database {
  constructor(connectionName: string) {
    this.init(connectionName);
  }

  private async init(connectionName: string): Promise<void> {
    await this.createConnections();
    this.getConnection(connectionName);

    console.log('Database ON');
  }

  private async createConnections(): Promise<Connection[]> {
    return await createConnections();
  }

  private getConnection(name: string): Connection {
    return getConnection(name);
  }
}
