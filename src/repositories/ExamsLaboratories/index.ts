import { getConnection, Repository } from 'typeorm';
import { ExamsLaboratories } from '@entities';
import { NODE_ENV } from '@utils';

export default class ExamsLaboratoriesRepository {
  private repository: Repository<ExamsLaboratories>;

  constructor() {
    this.repository = getConnection(NODE_ENV).getRepository(ExamsLaboratories);
  }

  async find(): Promise<ExamsLaboratoriesType.Values[]> {
    return await this.repository.find({ status: 'ACTIVE' });
  }

  async create({ laboratory, exam }: ExamsLaboratoriesType.Create): Promise<ExamsLaboratoriesType.Values> {
    const examsLaboratories = this.repository.create({
      laboratory,
      exam,
    });

    await this.repository.save(examsLaboratories);

    return examsLaboratories;
  }

  async update({ id, values }: ExamsLaboratoriesType.Update): Promise<boolean> {
    return !!(await this.repository.update(id, { ...values })).affected;
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.repository.delete(id)).affected;
  }
}
