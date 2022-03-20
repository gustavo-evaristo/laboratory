import { HelpRepository } from '@repositories';

export default class CreateHelpService {
  constructor(private helpRepository: HelpRepository) {}

  async execute({ title, description, category, file, status, owner, is_private }: HelpType.Create): Promise<boolean> {
    return !!(await this.helpRepository.create({ title, description, category, file, status, is_private, owner }));
  }
}
