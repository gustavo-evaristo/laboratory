import { getRepository, Repository } from 'typeorm';
import { ExamsLaboratories } from '@entities';

export default class ExamsLaboratoriesRepository {
  private repository: Repository<ExamsLaboratories>;

  constructor() {
    this.repository = getRepository(ExamsLaboratories);
  }

  async find(id: number): Promise<ExamsLaboratoriesType.Values> {
    return await this.repository.findOne({ where: { id, status: 'ACTIVE' }, relations: ['_laboratory', '_exam'] });
  }

  async findAll(): Promise<ExamsLaboratoriesType.Values[]> {
    return await this.repository.find({ where: { status: 'ACTIVE' }, relations: ['_laboratory', '_exam'] });
  }

  async create({ laboratory, exam }: ExamsLaboratoriesType.Create): Promise<ExamsLaboratoriesType.Values> {
    const examsLaboratories = this.repository.create({
      laboratory,
      exam,
    });

    await this.repository.save(examsLaboratories);

    return examsLaboratories;
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.repository.delete(id)).affected;
  }
}
