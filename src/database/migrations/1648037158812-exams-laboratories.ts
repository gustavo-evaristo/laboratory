import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class examsLaboratories1648037158812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exams-laboratories',
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
            name: 'laboratory',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'exam',
            type: 'integer',
            isNullable: false,
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

    const laboratoryForeignKey = new TableForeignKey({
      columnNames: ['laboratory'],
      referencedColumnNames: ['id'],
      referencedTableName: 'laboratory',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    const examForeignKey = new TableForeignKey({
      columnNames: ['exam'],
      referencedColumnNames: ['id'],
      referencedTableName: 'exam',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createForeignKey('exams-laboratories', laboratoryForeignKey);

    queryRunner.clearSqlMemory();

    await queryRunner.createForeignKey('exams-laboratories', examForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exams-laboratories');
  }
}
