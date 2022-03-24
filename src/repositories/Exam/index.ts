import { getRepository, Repository } from 'typeorm';
import { Exam } from '@entities';

export default class ExamRepository {
  private repository: Repository<Exam>;

  constructor() {
    this.repository = getRepository(Exam);
  }

  async find(id: number): Promise<ExamType.Values> {
    return await this.repository.findOne({ id, status: 'ACTIVE' });
  }

  async findAll(): Promise<ExamType.Values[]> {
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
