import { getConnection, Repository } from 'typeorm';
import { Exam } from '@entities';
import { NODE_ENV } from '@utils';

export default class ExamRepository {
  private repository: Repository<Exam>;

  constructor() {
    this.repository = getConnection(NODE_ENV).getRepository(Exam);
  }

  async find(): Promise<ExamType.Values[]> {
    return await this.repository.find({ status: 'ACTIVE' });
  }

  async create({ name, type }: ExamType.Create): Promise<ExamType.Values> {
    const exam = this.repository.create({
      name,
      type,
    });

    await this.repository.save(exam);

    return exam;
  }

  async update({ id, values }: ExamType.Update): Promise<boolean> {
    return !!(await this.repository.update(id, { ...values })).affected;
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.repository.delete(id)).affected;
  }
}
