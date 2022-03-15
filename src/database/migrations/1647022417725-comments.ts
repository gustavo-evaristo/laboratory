import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class comments1647022417725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'help',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'owner',
            type: 'integer',
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
