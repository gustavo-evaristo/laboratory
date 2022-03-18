import { Connection, createConnections, getConnection } from 'typeorm';

export default class Database {
  private connectionName: string;

  constructor(connectionName: string) {
    this.connectionName = connectionName;
  }

  public async connect(): Promise<void> {
    await this.createConnections();
    this.getConnection(this.connectionName);
  }

  private async createConnections(): Promise<Connection[]> {
    return await createConnections();
  }

  private getConnection(name: string): Connection {
    return getConnection(name);
  }

  public async close(): Promise<void> {
    return getConnection(this.connectionName).close();
  }
}
