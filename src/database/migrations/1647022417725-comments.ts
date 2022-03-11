import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class comments1647022417725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'number',
            generationStrategy: 'increment',
            isPrimary: true,
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'help',
            type: 'number',
            isNullable: false,
          },
          {
            name: 'owner',
            type: 'number',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'file',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    queryRunner.clearSqlMemory();

    const UserForeignKey = new TableForeignKey({
      columnNames: ['owner'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createForeignKey('comments', UserForeignKey);

    queryRunner.clearSqlMemory();

    const HelpForeignKey = new TableForeignKey({
      columnNames: ['help'],
      referencedColumnNames: ['id'],
      referencedTableName: 'helps',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createForeignKey('comments', HelpForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comments');
  }
}
