import { Connection, createConnection, getConnection } from 'typeorm';

class Database {
  public async connect(): Promise<void> {
    await this.createConnection();
    this.getConnection();
  }

  private async createConnection(): Promise<Connection> {
    return await createConnection();
  }

  private getConnection(): Connection {
    return getConnection();
  }

  public async close(): Promise<void> {
    return getConnection().close();
  }
}

export default new Database();
